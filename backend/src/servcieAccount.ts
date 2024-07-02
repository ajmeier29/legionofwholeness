import 'dotenv/config'
import { ServiceAccount } from 'firebase-admin';

const myServiceAccount: ServiceAccount = {
  projectId: process.env.SERVICE_ACCOUNT_PROJECT_ID,
  clientEmail: process.env.CLIENT_EMAIL,
  privateKey: process?.env?.PRIVATE_KEY?.replace(/\\n/g, '\n')
};

export default myServiceAccount;
