/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://ackee-dj6u.onrender.com",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,POST",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Authorization, Content-Type, Time-Zone",
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Max-Age", value: "3600" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
