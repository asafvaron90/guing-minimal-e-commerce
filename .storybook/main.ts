import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // Force one React runtime for every adapter. Adapter-specific packages remain
  // owned by the selected adapter instead of leaking into generic Storybook config.
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      resolve: {
        dedupe: [
          'react',
          'react-dom',
        ],
      },
      optimizeDeps: {
        include: [
          'react',
          'react-dom',
        ],
      },
    });
  },
};

export default config;
