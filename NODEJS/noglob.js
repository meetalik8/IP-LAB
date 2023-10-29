// Importing the non-global os module
const os = require('os');

// Getting operating system information
const osInfo = {
  platform: os.platform(),
  architecture: os.arch(),
};

// Outputting the operating system information
console.log("Operating System Information:");
console.log("Platform:", osInfo.platform);
console.log("Architecture:", osInfo.architecture);
