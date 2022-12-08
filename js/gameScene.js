/* global phaser */
// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: NOV 2022
// This file contains the JS functions for index.html

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });

    this.background = null;
    this.ship = null;
    this.fireMissle = false;
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }

  preload() {
    console.log("Game Scene");

    this.load.image("starBackground", "./assets/starBackground.png");
    this.load.image("ship", "./assets/spaceShip.png");
    this.load.image("missile", "./assets/missile.png");
  }

  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0);
    this.background.setOrigin(0, 0);

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship");

    this.missleGroup = this.physics.add.group();
  }

  update(time, delta) {
    const keyLeftObj = this.input.keyboard.addKey("LEFT");
    const keyRightObj = this.input.keyboard.addKey("RIGHT");
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15;
      if (this.ship.x < 0) {
        this.ship.x = 0;
      }
    }
    if (keyRightObj.isDown === true) {
      this.ship.x += 15;
      if (this.ship.x > 1920) this.ship.x = 1920;
    }

    if (keySpaceObj.isDown === true) {
      if (this.firemissile === false) {
        this.firemissile = true;
        const aNewMissile = this.physics.add.sprite(
          this.ship.x,
          this.ship.y,
          "missile"
        );
        this.missileGroup.add(aNewMissile);
      }
    }

    if (keySpaceObj.isUp === true) {
      this.firemissile = false;
    }
  }
}

export default GameScene;
