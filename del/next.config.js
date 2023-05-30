/** @type {import('next').NextConfig} */
module.exports = {
    httpAgentOptions: {
    keepAlive: false,
  },
    experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    }
};
// export const experimental = { appDir: true, serverComponentsExternalPackages: ["mongoose"] };

// export function webpack(config) {
//     config.experiments = { ...config.experiments, topLevelAwait: true };
//     return config;
// }
// const nextConfig = {}

// module.exports = nextConfig
