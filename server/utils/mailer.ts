import nodemailer from "nodemailer";

export const mailer = {
  instance: () =>
    nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_GMAIL_EMAIL,
        pass: process.env.NODEMAILER_GMAIL_PASSWORD,
      },
    }),
  sendEmail: (to: string, subject: string, html: string) => {
    const mailOptions = {
      from: "theblock@info.com",
      to: to,
      subject: subject,
      html: html,
    };

    return mailer.instance().sendMail(mailOptions);
  },
};
