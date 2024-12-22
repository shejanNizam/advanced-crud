import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });
// dotenv.config(); // also use this

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
