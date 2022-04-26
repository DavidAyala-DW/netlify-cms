module.exports = {
  reactStrictMode: true,
  images: {
    layoutRaw: true,
    domains: [
      "cdn.bitskistatic.com",
      "www.bitski.com"
    ]
  },

  sassOptions: {

    prependData: `
    
    `,

  },

  webpack: (cfg) => {
    cfg.module.rules.push(
      {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: { mode: ['react-component'] }
      }
    )
    return cfg;
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
}
