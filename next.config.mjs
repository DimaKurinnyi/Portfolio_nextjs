/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.liquidplanner.com", "res.cloudinary.com"],
  },
};

export default nextConfig;

// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// };
