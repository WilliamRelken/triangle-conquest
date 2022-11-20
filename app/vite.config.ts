import injectSocket from "./src/lib/socket";
import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [
    sveltekit(),
    {
      name: "sveltekit-socket-io",
      configureServer(server) {
        injectSocket(server.httpServer);
      },
    },
  ],
};

export default config;
