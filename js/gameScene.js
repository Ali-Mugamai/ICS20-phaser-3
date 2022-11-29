/* global phaser */
// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: NOV 2022
// This file contains the JS functions for index.html

class GameScene extends Phaser.scene {

    constructor() {
        super({key: "gameScene"})
    }

    init(data) {
        this.cameras.main.setBackgroundColor("ffffff")
    }
    
    preload() {
        console.log("Game Scene")
    }

    create(data) {
        //pass
    }

    update(time, delta) {
        //pass
    }
}

export default GameScene