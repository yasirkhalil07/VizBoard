// const getEnv = (key: string, fallback?: string) => {
//   const env = process.env;
//   const value = env?.[key];

//   if (!value && !fallback) {
//     console.warn(`Missing env variable: ${key}`);
//   }

//   return value ?? fallback ?? "";
// };

// export const BACKEND_HTTP = getEnv("NEXT_PUBLIC_BACKEND_HTTP");

export const BACKEND_HTTP = process.env.NEXT_PUBLIC_BACKEND_HTTP ?? "";
console.log("ENV:", process.env.NEXT_PUBLIC_BACKEND_HTTP);