import { spawn } from "cross-spawn";
import { ChildProcess } from "child_process";

import { error } from "./log";

export class ElectronAutoReloadPlugin {
  electronModule;
  electronProcess: ChildProcess;

  constructor() {
    this.importModule();
  }

  importModule = () => {
    try {
      this.electronModule = require("electron");
    } catch (ex) {
      error("electron module not found");
    }
  };

  loadProcess = () => {
    if (!this.electronModule) {
      return;
    }

    this.electronProcess = spawn(this.electronModule, ["./"], {
      stdio: "inherit"
    });
  };

  killProcess = () => {
    this.electronProcess.kill();
  };

  reloadProcess = () => {
    if (!this.electronProcess) {
      return;
    }

    this.killProcess();
    this.loadProcess();
  };

  // Webpack entry method
  apply = compiler => {
    compiler.hooks.done.tap("ElectronAutoReloadPlugin", () => {
      if (!this.electronProcess) {
        this.loadProcess();
      } else {
        this.reloadProcess();
      }
    });
  };
}
