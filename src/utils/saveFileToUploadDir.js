import path from 'node:path';
import fs from 'node:fs/promises';
import dotenv from 'dotenv';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from '../constants/index.js';

dotenv.config();

export const saveFileToUploadDir = async (file) => {
  await fs.rename(path.join(TEMP_UPLOAD_DIR, file.filename), path.join(UPLOAD_DIR, file.filename));

  return `${process.env.APP_DOMAIN}/uploads/${file.filename}`;
};
