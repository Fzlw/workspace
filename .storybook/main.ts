import type { StorybookConfig } from "@storybook/vue3-vite";
import ElementPlus from 'unplugin-element-plus/vite'
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ["../packages/component/**/*.mdx", "../packages/component/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",  
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, options) {
    return mergeConfig(config, {
      plugins: [
        ElementPlus({})
      ]
    })
  }
};
export default config;
