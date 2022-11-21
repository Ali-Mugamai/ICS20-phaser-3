/* global phaser */
// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: NOV 2022
// This file contains the JS functions for index.html

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" });
  }
  /**
   * @param {object} data - any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }

  preload() {
    console.log("Splash Scene");
  }

  /**
   * @param {object} data - any data passed via scene plugin.add() or scene plugin.start()
   */
  create(data) {
    //pass
  }
  /**
   * @param {number} time - the current time
   * @param {number} delta - the delta time in ms since last frame
   */
  update(time, delta) {
    this.scene.switch("TitleScene")
    //pass
  }
}

export default SplashScene;
