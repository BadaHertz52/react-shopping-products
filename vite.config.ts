import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const srcPath = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-shopping-products',
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
