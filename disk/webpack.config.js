const path = require("path");
/**
 * Created by Vincent Hennig on 30.05.17.
 */
module.exports = {
    entry: {
        main: "./src/scheduling.ts",
        settings: "./src/settings/index.ts"
    },
    output: {
        path: path.resolve(__dirname),
        filename: "[name].bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/},
            {test: /\.ts$/, loader: "tslint-loader", enforce: "pre"}
        ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./"
    },
    mode: "development"
};
