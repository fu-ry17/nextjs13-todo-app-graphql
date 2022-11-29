declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET: string;
      DATABASE_URL: string;
      DEFAULT_AVATAR_URL: string;
      COOKIE_NAME: string;
      ORIGIN_URL: string;
      REDIS_URL: string;
      EMAIL_CLIENT_ID: string;
      EMAIL_CLIENT_SECRET: string;
      EMAIL_REFRESH_TOKEN: string;
      EMAIL_FROM: string;
    }
  }
}

export {}
