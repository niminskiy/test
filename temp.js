{
    "name": "test",
        "version": "1.0.0",
            "description": "",
                "main": "webpack.config.js",
                    "scripts": {
        "start": "webpack serve --mode development --open",
            "build": "webpack --mode production"
    },
    "author": "niminskiy",
        "license": "ISC",
            "devDependencies": {
        "@babel/core": "^7.12.10",
            "@babel/plugin-proposal-class-properties": "^7.12.1",
                "@babel/preset-env": "^7.12.11",
                    "babel-loader": "^8.2.2",
                        "webpack": "^5.17.0",
                            "webpack-cli": "^4.4.0",
                                "webpack-dev-server": "^3.11.2"
    }
}