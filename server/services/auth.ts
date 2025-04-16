import {
  ILoginInput,
  ILoginResponse,
  IRecoveryInput,
  IRegisterInput,
  IResetInput,
} from "~/types/interfaces";
import jwt from "jsonwebtoken";
import { userService } from "~/server/services/user";
import bcrypt from "bcryptjs";
import { User } from "~/src/generated/prisma";
import { resetTokenService } from "~/server/services/resetToken";
import crypto from "crypto";

interface IAuthService {
  login(data: ILoginInput): Promise<ILoginResponse>;
  comparePassword(password: string, hashedPassword: string): Promise<boolean>;
  register(data: IRegisterInput): Promise<User>;
  recovery(data: IRecoveryInput): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
  reset(data: IResetInput): Promise<boolean>;
}

export const authService: IAuthService = {
  async login(data) {
    const { email, password, rememberMe } = data;
    const { jwtSecret } = useRuntimeConfig();
    const existedUser = await userService.findByEmail(email);

    if (!existedUser) {
      throw { statusCode: 401, statusMessage: "Invalid email or password." };
    }

    const isPasswordValid = await this.comparePassword(
      password,
      existedUser.passwordHash
    );

    if (!isPasswordValid) {
      throw { statusCode: 401, statusMessage: "Invalid email or password." };
    }

    const token = jwt.sign({ userId: existedUser.id }, jwtSecret, {
      expiresIn: rememberMe ? "30d" : "1h",
    });

    if (!token) {
      throw {
        statusCode: 500,
        statusMessage: "Failed to generate authentication token.",
      };
    }

    return {
      token,
      user: existedUser,
    };
  },

  async register(data) {
    const { name, password, email } = data;
    const existedUser = await userService.findByEmail(email);

    if (existedUser) {
      throw {
        statusCode: 409,
        statusMessage: "This email is already registered.",
      };
    }

    const hashedPassword = await this.hashPassword(password);
    const newUser = await userService.create({
      email: email,
      name: name,
      passwordHash: hashedPassword,
    });
    if (!newUser) {
      throw {
        statusCode: 500,
        statusMessage: "Failed to create user.",
      };
    }

    return newUser;
  },

  async recovery(data) {
    const { password, confirmPassword, token } = data;

    const existedToken = await resetTokenService.findByToken(token);

    if (!existedToken) {
      throw {
        statusCode: 410,
        statusMessage: "Invalid or expired secret token.",
      };
    }

    const hashedPassword = await this.hashPassword(password);
    const updatedUser = await userService.update(existedToken.userId, {
      passwordHash: hashedPassword,
    });
    if (!updatedUser) {
      throw {
        statusCode: 500,
        statusMessage: "Failed to update password.",
      };
    }
    return !!updatedUser;
  },

  async reset(data) {
    const { email, endpoint } = data;

    const existedUser = await userService.findByEmail(email);
    if (!existedUser) {
      throw {
        statusCode: 404,
        statusMessage: "This email is not registered.",
      };
    }

    const token = crypto.randomBytes(32).toString("hex");
    const newResetToken = await resetTokenService.create({
      token: token,
      user: { connect: { id: existedUser.id } },
      expiresAt: new Date(Date.now() + 3600 * 1000),
    });

    if (!newResetToken) {
      throw {
        statusCode: 500,
        statusMessage: "Failed to generate reset token.",
      };
    }

    const url = new URL(endpoint);
    url.searchParams.set("secret", token);

    const text = `<p>We received a request to reset your password. Click the link below to set a new one:</p>
    <p><a href="${url.toString()}">Reset Password</a></p>`;

    try {
      mailer.sendEmail(email, "Reset password", text);
      return true;
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to send email.",
      });
    }
  },

  async comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  },

  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  },
};
