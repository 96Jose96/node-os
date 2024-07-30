
const os = require('node:os');

const getOsData = () => {
    return {
        Name: os.type(),
        Type: os.platform(),
        Version: os.release(),
        Arch: os.arch(),
        Cpus: os.cpus().length,
        TotalMemory: `${(os.totalmem() / (1024 * 1024)).toFixed(2)} MB`,
        FreeMemory: `${(os.freemem() / (1024 * 1024)).toFixed(2)} MB`
    };
};

module.exports = getOsData;
