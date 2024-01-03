/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //외부이미지 사용시 설정해줘야함
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
        port: "",
        pathname: "",
      },
    ],
  },
};

module.exports = nextConfig;
