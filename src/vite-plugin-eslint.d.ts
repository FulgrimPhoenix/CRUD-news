declare module "vite-plugin-eslint" {
  import { Plugin } from "vite";

  function eslintPlugin(options?: Record<string, unknown>): Plugin;

  export default eslintPlugin;
}
