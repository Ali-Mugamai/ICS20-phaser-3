/* global phaser */
// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: NOV 2022
// This file contains the JS functions for index.html

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" });

    this.splashSceneBackgroundImage = null;
  }
  /**
   * @param {object} data - any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }

  preload() {
    console.log("Splash Scene");
    this.load.image("splashSceneBackground", "./assets/splashSceneImage.png");
  }

  /**
   * @param {object} data - any data passed via scene plugin.add() or scene plugin.start()
   */
  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    );
    this.splashSceneBackgroundImage.x = 1920 / 2;
    this.splashSceneBackgroundImage.y = 1080 / 2;
  }
  /**
   * @param {number} time - the current time
   * @param {number} delta - the delta time in ms since last frame
   */
  update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene");
    }
  }
}

export default SplashScene;
