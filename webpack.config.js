const { resolve } = require("path");

const PATH_SRC = resolve(__dirname, "src");
const PATH_OUTPUT = resolve(__dirname, "dist");

module.exports = {
  target: "node",
  entry: {
    index: PATH_SRC
  },
  output: {
    filename: "[name].js",
    path: PATH_OUTPUT
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  stats: { modules: false, children: false },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [PATH_SRC],
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  }
};
