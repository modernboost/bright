/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true, // Ignores ESLint errors during production builds
	},
};

export default nextConfig;
