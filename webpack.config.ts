import path from "path";
import webpack from "webpack";

import { buildWebpack } from "./config/build/buildWebpack";
import {
  BuildMode,
  BuildPaths,
  BuildPlatform,
} from "./config/build/types/types";

interface EnvVariables {
  mode?: BuildMode;
  platform?: BuildPlatform;
  port?: number;
  analyzer?: boolean;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  };
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 4200,
    mode: env.mode ?? "development",
    platform: env.platform ?? "desktop",
    paths,
    analyzer: env.analyzer,
  });

  return config;
};
