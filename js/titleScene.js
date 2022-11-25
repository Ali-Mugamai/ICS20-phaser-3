/* global phaser */
// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: NOV 2022
// This file contains the JS functions for index.html

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" })

    this.titleSceneBackgroundImage = null
    this.titleSceneText - null
    this.titleSceneTextStyle = {
      font: "200px Times",
      fill: "#fde4b9",
      align: "center",
    }
  }
  /**
   * @param {object} data
   */
  Init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }
  preload() {
    console.log("Title Scene")
    this.preload.image("titleSceneBackground", "assets/aliens_screen_image.jpg")
  }
  create(data) {
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add
      .text(1920 / 2, 1080 / 2 + 350, "Space Aliens", this.titleSceneTextStyle)
      .setOrigin(0.5)
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
