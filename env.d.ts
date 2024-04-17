declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENCRYPTION_KEY: string | undefined;
      FIREBASE_KEY: string | undefined;
    }
  }
}

export {};
