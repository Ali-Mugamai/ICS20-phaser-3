/* global phaser */
// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: NOV 2022
// This file contains the JS functions for index.html

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });
  }
  /**
   * @param {object} data
   */
  Init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }
  preload() {
    console.log("Title Scene");
  }
  create(data) {
    //pass
  }
  /**
   * @param {number} time - the current time
   * @param {number} delta - the delta time in ms since last frame
   */
  update(time, delta) {
    //pass
  }
}

export default TitleScene;
