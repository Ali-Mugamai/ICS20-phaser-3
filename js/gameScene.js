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
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }

  preload() {
    console.log("Game Scene");

    this.load.image("starBackground", "./assets/starBackground.png");
    this.load.image("ship", "./assets/spaceShip.png");
  }

  create(data) {
    //pass
  }

  update(time, delta) {
    //pass
  }
}

export default GameScene;
