/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");
import withSerwistInit from "@serwist/next";
// import withPWA from 'next-pwa';
// import runtimeCaching from 'next-pwa/cache.js';
const isProduction = process.env.NODE_ENV === 'production';
 

// /** @type {import("next").NextConfig} */
// const config = {
//   reactStrictMode: false, // Enable this if you're afraid
//   swcMinify: true, // Enable SWC minification for improved performance
//   compiler: {
//     removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
//   },
// };
// const withPWA = require('next-pwa')({
//   dest: 'public'
// })

// module.exports = withPWA({
//   reactStrictMode: false, // Enable this if you're afraid
//   swcMinify: true, // Enable SWC minification for improved performance
//   compiler: {
//     removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
//   },
// })

      
const withSerwist = withSerwistInit({
    swSrc: "app/sw.ts",
    swDest: "public/sw.js",
});
         
export default withSerwist({
  reactStrictMode: false, // Enable this if you're afraid
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  }
});

// const nextConfig = withPWA({
//   dest: 'public',
//   disable: !isProduction,
//   logging: false,
//   // runtimeCaching
// })(
//   config
// );
 
// export default nextConfig;
