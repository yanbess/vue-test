if (! process.env.ECHO_USER && process.env.NODE_ENV === "development") {
    console.error("Please set an environment variable ECHO_USER with your dev initials (eg. 'mpm') (see vue.config.js)");
}

module.exports = {
    outputDir: "build",

    devServer: {
        port: 8044,
        host: process.env.ECHO_USER + "-dev.intern.ebroot.de",
        https: true,
        allowedHosts: [
          ".intern.ebroot.de"
        ],
        proxy: {
            "/backend": {
                // don't forget to set env variable ECHO_USER!
                target: "https://datacare." + process.env.ECHO_USER + "-dev.intern.ebroot.de",
                changeOrigin: true,
            },
        },
    },

    configureWebpack: {
        devtool: "source-map", // use "sourJTce-map" for better but slower source maps @michmueller
    },

    pluginOptions: {
      i18n: {
        locale: "de",
        fallbackLocale: "en",
        localeDir: "i18n",
        enableInSFC: false
      }
    },

    publicPath: process.env.NODE_ENV === "development" ? "/" : "/d/static",
    productionSourceMap: false,
    parallel: true,

    css: {
      sourceMap: true
    }
};
