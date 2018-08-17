const path = require('path');
const os = require('os');

const platform = os.platform();

const SUPPORTED_PLATFORMS = [
  'win32',
  'win64',
  'darwin', // macOS, OSX
  'linux',
];

const BINARIES = {
  win32: path.resolve(__dirname, '..', 'lib', 'dcmtk', 'dcmtk-3.6.2-win32-dynamic', 'bin'),
  win64: path.resolve(__dirname, '..', 'lib', 'dcmtk', 'dcmtk-3.6.2-win32-dynamic', 'bin'),
  darwin: path.resolve(__dirname, '..', 'lib', 'dcmtk', 'dcmtk-3.6.0-darwin', 'bin'),
  linux: path.resolve(__dirname, '..', 'lib', 'dcmtk', 'dcmtk-3.6.2-linux-x86_64-static', 'bin'),
};

const binaryPath = BINARIES[platform];

const DCMDICTPATH = path.resolve(binaryPath, '..', 'share', 'dcmtk', 'dicom.dic');

module.exports = () => {
  const supported = SUPPORTED_PLATFORMS.includes(platform);
  if (!supported) throw new Error(`The current platform "${platform}" is not supported.`);
  return {
    platform,
    DCMDICTPATH,
    BINARIES,
    binaryPath,
  };
};
