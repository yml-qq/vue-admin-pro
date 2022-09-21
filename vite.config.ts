import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";
// 自动导入解析器
import IconsResolver from "unplugin-icons/resolver";
// 解析svg文件
import { FileSystemIconLoader } from "unplugin-icons/loaders";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-import.d.ts"
    }),
    Components({
      dts: true,
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          customCollections: ["custom"],
          prefix: "i",
          alias: {
            system: "system-uicons"
          }
        })
      ]
    }),
    Components({
      dirs: ["src/components"],
      extensions: ["vue", "tsx"],
      dts: "src/components.d.ts"
    }),
    WindiCSS(),
    Icons({
      compiler: "vue3",
      customCollections: { custom: FileSystemIconLoader("src/assets/icons") }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@build": resolve(__dirname, "build")
    }
  }
});
