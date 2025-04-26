// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/Websites/Portfolio/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Websites/Portfolio/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/Websites/Portfolio/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { resolve } from "node:path";
var __vite_injected_original_dirname = "D:\\Websites\\Portfolio";
var __vite_injected_original_import_meta_url = "file:///D:/Websites/Portfolio/vite.config.ts";
var vite_config_default = defineConfig(({ command, mode }) => {
  const inputOptions = {
    main: resolve(__vite_injected_original_dirname, "index.html"),
    mods: resolve(__vite_injected_original_dirname, "mods.html")
  };
  return {
    appType: "mpa",
    plugins: [
      vue(),
      vueJsx()
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    base: "/",
    build: {
      rollupOptions: {
        input: inputOptions
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXZWJzaXRlc1xcXFxQb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdlYnNpdGVzXFxcXFBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovV2Vic2l0ZXMvUG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5cclxuaW1wb3J0IHsgSW5wdXRPcHRpb24gfSBmcm9tICdyb2xsdXAnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dE9wdGlvbnM6IElucHV0T3B0aW9uID0ge1xyXG4gICAgICAgIG1haW46IHJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIG1vZHM6IHJlc29sdmUoX19kaXJuYW1lLCAnbW9kcy5odG1sJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhcHBUeXBlOiAnbXBhJyxcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAgIHZ1ZSgpLFxyXG4gICAgICAgICAgICB2dWVKc3goKSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhc2U6ICcvJyxcclxuICAgICAgICBidWlsZDoge1xyXG4gICAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dDogaW5wdXRPcHRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVAsU0FBUyxlQUFlLFdBQVc7QUFFMVIsU0FBUyxvQkFBNkI7QUFDdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUduQixTQUFTLGVBQWU7QUFQeEIsSUFBTSxtQ0FBbUM7QUFBOEcsSUFBTSwyQ0FBMkM7QUFVeE0sSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUMvQyxRQUFNLGVBQTRCO0FBQUEsSUFDOUIsTUFBTSxRQUFRLGtDQUFXLFlBQVk7QUFBQSxJQUNyQyxNQUFNLFFBQVEsa0NBQVcsV0FBVztBQUFBLEVBQ3hDO0FBRUEsU0FBTztBQUFBLElBQ0gsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLE1BQ0wsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLElBQ1g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNILEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDeEQ7QUFBQSxJQUNKO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDSCxlQUFlO0FBQUEsUUFDWCxPQUFPO0FBQUEsTUFDWDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
