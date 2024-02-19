
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { UserConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import Components from 'vite-plugin-components';

const config: UserConfig = {
  optimizeDeps: {
    exclude: ['vue-demi', '@vueuse/shared', '@vueuse/core'],
  },
  plugins: [
    Components({
      dirs: ['.vitepress/theme/components'],
      customLoaderMatcher: (id) => id.endsWith('.md'),
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Icons(),
    WindiCSS({
      preflight: false,
    }),
  ],
};

const __unconfig_default =  config;

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;