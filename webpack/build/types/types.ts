export type BuildPaths = {
    entry: string
    html: string
    output: string
    src: string
    public: string
}

export type BuildMode = 'development' | 'production'
export type BuildPlatform = 'mobile' | 'desktop'

export type BuildOptions = {
    port: number
    paths: BuildPaths
    mode: BuildMode
    analyzer: boolean
    platform: BuildPlatform
}

export type EnvVariables = {
    mode?: BuildMode
    port?: number
    analyzer?: boolean
    platform?: BuildPlatform
}