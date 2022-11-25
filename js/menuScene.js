/* global phaser */
// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: NOV 2022
// This file contains the JS functions for index.html

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" });
  }

  Infinity(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }

  preload() {
    console.log("Menu Scene");
  }

  create(data) {
    //pass
  }

  update(time, delta) {
    //pass
  }
}

export default MenuScene;
