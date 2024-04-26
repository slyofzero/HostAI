declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENCRYPTION_KEY: string | undefined;
      FIREBASE_KEY: string | undefined;
      JWT_SECRET: string | undefined;
      RPC_URL: string | undefined;
      CLOUD_AWS_ACCESS_KEY_ID: string | undefined;
      CLOUD_AWS_ACCESS_KEY: string | undefined;
    }
  }
}

export {};
