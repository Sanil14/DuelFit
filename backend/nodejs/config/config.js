const Config = function () {
    switch ((process.env.NODE_ENV).trim()) {
        case 'production':
            return {
                port: 5000,
                frontendURL: ""
            }
        default:
            return {
                port: 5000,
                frontendURL: "localhost:3000"
            }
    }
}

if ((process.env.NODE_ENV).trim() === "production") {
    console.log('-------------------[PRODUCTION BUILD]-------------------');
} else {
    console.log('-------------------[DEVELOPMENT BUILD]-------------------');
}

module.exports = Config();
