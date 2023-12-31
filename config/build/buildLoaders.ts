import { RuleSetRule } from "webpack/types"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
    }


    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]'
                    }
                },

            },
            "sass-loader",
        ],
    }

    return [
        typescriptLoader,
        cssLoader,
    ]
}