import { ResolveOptions } from "webpack/types"

export const buildResolvers = (): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'], // если файл с этим расширением, то при импорте его можно не указывать
    }
}