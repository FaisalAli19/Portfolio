module.exports = {
    //File webpack will convert
    entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    //File output location
    output: {
        path: "./app/temp/scripts",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                loader: "babel",
                query: {
                    presets: ["es2015"]
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}
