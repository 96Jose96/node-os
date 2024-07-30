

const os = require('node:os');

const getNetworkInfo = () => {
    const networkInterfaces = os.networkInterfaces();
    const networkInfo = {};

    for (const interfaceName in networkInterfaces) {
        const interfaces = networkInterfaces[interfaceName];
        networkInfo[interfaceName] = interfaces.map(({ address, family, internal }) => ({
            Address: address,
            Family: family,
            Internal: internal
        }));
    }

    return networkInfo;
};

module.exports = getNetworkInfo;

