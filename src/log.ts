const prefix = "[Electron-Auto-Reload]: ";

export function error(message: string) {
  console.log("\x1b[31m%s", prefix + message, "\x1b[0m");
}

export function log(message: string) {
  console.log("\x1b[94m%s", prefix + "\x1b[0m" + message);
}
