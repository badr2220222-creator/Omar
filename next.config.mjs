// --| DEFUlt
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       { hostname: "avatar.vercel.sh", port: "", protocol: "https" },
//       { hostname: "utfs.io", port: "", protocol: "https" },
//       {
//         // hostname: "avatars.githubusercontent.com",
//         hostname: 'localhost',
//         port: "",
//         protocol: "https",
//         pathname: '/**',
//       },
//     ],
//     // domains: ['localhost'],
//     domains: ["lh3.googleusercontent.com"],
//   },
// };

// export default nextConfig;

// --| EDIT ABAD
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "avatar.vercel.sh", port: "", protocol: "https" },
      { hostname: "utfs.io", port: "", protocol: "https" },
      {
        hostname: 'localhost',
        port: "",
        protocol: "https",
        pathname: '/**',
      },
    ],
    domains: ["lh3.googleusercontent.com"],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);

