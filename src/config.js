export const configFirebase = {
  serviceAccount: {
    projectId: process.env.PROJECT_ID || 'projectId',
    clientEmail: process.env.CLIENT_EMAIL || 'foo@projectId.iam.gserviceaccount.com',
    privateKey: process.env.PRIVATE_KEY || '-----BEGIN PRIVATE KEY-----\nkey\n-----END PRIVATE KEY-----\n'
  },
  databaseURL: process.env.DATABASE_URL || 'https://databaseName.firebaseio.com'
};

export default { configFirebase };
