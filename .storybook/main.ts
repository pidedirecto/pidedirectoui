import type { StorybookConfig } from '@storybook/react-webpack5';
import path from "path";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {
      "builder": {
        "useSWC": true
      }
    }
  },
  "docs": {
    "autodocs": "tag"
  },
  webpackFinal: async (config, { configType }) => {
    // Add Babel module-resolver to Storybook's Webpack config
    // config.module.rules.push({
    //   test: /\.(js|jsx|ts|tsx)$/,
    //   exclude: /node_modules/,
    //   use: {
    //     loader: 'babel-loader',
    //   },
    // });

    if(config.resolve){
      config.resolve.alias = {
        // Add aliases that match your Babel configuration
        src: path.resolve(__dirname, '../src'),
        // Add more aliases as needed
      };
    }

    return config;
  },
};
export default config;
