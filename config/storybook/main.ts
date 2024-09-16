import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    {
      name: "storybook-css-modules",
      options: {
        cssModulesLoaderOptions: {
          importLoaders: 1,
          modules: {
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
          },
        },
      },
    },
    "@storybook/addon-styling-webpack",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // This modifies the existing image rule to exclude .svg files
    // since you want to handle those files with @svgr/webpack
    const imageRule = config.module.rules.find((rule) =>
      rule?.["test"]?.test(".svg")
    );
    if (imageRule) {
      imageRule["exclude"] = /\.svg$/;
    }

    // Configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
export default config;
