import dotenv from 'dotenv';
import { join } from 'path';

// .env.local should contain your own database credentials
// .env will contain all other shared project variables like cloud
// keys, Auth0 keys, etc.

dotenv.config({ path: join(__dirname, '../../.env') });
dotenv.config({ path: join(__dirname, '../../.env.local') });
