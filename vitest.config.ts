import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

const srcPath = resolve(__dirname, 'src');

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: [
      { find: '@src', replacement: srcPath },
      { find: '@components', replacement: resolve(srcPath, 'components') },
      { find: '@contexts', replacement: resolve(srcPath, 'contexts') },
      { find: '@styles', replacement: resolve(srcPath, 'styles') },
      { find: '@assets', replacement: resolve(srcPath, 'assets') },
      { find: '@constants', replacement: resolve(srcPath, 'constants') },
      { find: '@utils', replacement: resolve(srcPath, 'utils') },
      { find: '@mocks', replacement: resolve(srcPath, 'mocks') },
      { find: '@hooks', replacement: resolve(srcPath, 'hooks') },
      { find: '@pages', replacement: resolve(srcPath, 'pages') },
      { find: '@apis', replacement: resolve(srcPath, 'apis') },
      { find: '@appTypes', replacement: resolve(srcPath, 'appTypes') },
    ],
  },
});
