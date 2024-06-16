const {mergeConfig, getDefaultConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {resolver, transformer} = defaultConfig;
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    ...transformer, // <--- THIS WAS MISSING
  },
  resolver: {
    ...resolver, // <--- THIS WAS MISSING
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
