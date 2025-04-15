import { ServerFile } from "nuxt-file-storage";
import { fileService } from "~/server/services/file";
import authMiddleware from "~/server/utils/auth";

export default defineEventHandler(async (event) => {
  await authMiddleware(event);
  const { files } = await readBody<{ files: ServerFile[] }>(event);

  const result = await Promise.all(
    files.map(async (file) => {
      try {
        const fileId: string = await storeFileLocally(file, 10);
        const fileUrl: string = await getFileLocally(fileId);
        const fileRecord = await fileService.create({
          id: fileId,
          url: fileUrl,
          size: Number(file.size),
          mimetype: file.type,
          filename: fileId,
        });
        return fileRecord;
      } catch (error) {
        throw {
          statusCode: 500,
          statusMessage: "Failed to create file.",
        };
      }
    })
  );

  return result;
});
