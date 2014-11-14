"use strict";
function Player(num, centerX, centerY) {
    centerX = centerX || window.innerWidth * 0.5;
    centerY = centerY || window.innerHeight * 0.5;
    this.id = num;
    this.currentWord = undefined;
    this.mode = 'normal';
    switch (this.id) {
    case 0:
        this.color = "#FDE8E8";
        this.comColor = "#F59A9C";
        this.selColor = "#F05657";
        break;
    case 1:
        this.color = "#E7E9F5";
        this.comColor = "#9E9BCC";
        this.selColor = "#5960AB";
        break;
    case 2:
        this.color = "#FEF8DA";
        this.comColor = "#E29C35";
        this.selColor = "#BB842B";
        break;
    case 3:
        this.color = "#E3EFD0";
        this.comColor = "#9FCB9D";
        this.selColor = "#3AAE49";
        break;
    }

    this.rect = {
        x: (this.id % 2) * centerX,
        y: (function (id) {
            if (id === 1) {
                return 0;
            } else if (id === 2) {
                return centerY;
            } else {
                return (id % 2) * centerY;
            }
        }(this.id)),
        width: centerX,
        height: centerY
    };
    this.rect.centerX = this.rect.x + (this.rect.width * 0.5);
    this.rect.centerY = this.rect.y + (this.rect.height * 0.5);
    this.score = 0;
    //this.color = id << '#000';
}
Player.prototype = {constructor: Player};
Player.prototype.setWord = function (newWord) {
    this.currentWord = new Word(newWord, this.rect.centerX, this.rect.centerY);
};

Player.prototype.update = function () {
    if (this.mode !== 'click') {
        InputManager.keyHandle(this.currentWord);
    }
    if (this.currentWord.solved) {
        var instance = Core.getInstance();
        var currentLevel = instance.getCurrentLevel();
        this.setWord(currentLevel.randomWordFromList());
        this.score += 100;
    }
};

Player.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    this.currentWord.draw(ctx, this.comColor, this.selColor);
    ctx.fillStyle = '#676767';
    ctx.font = 'normal 16pt Raleway Light';
    ctx.textAlign = "right";
    //super hardcoded, switch to modulo at some point
    var scoreRect = (function (id, centerX, centerY) {
        var rect = {};
        switch (id) {
        case 0:
            rect.x = centerX - 25;
            rect.y = centerY - 25;
            break;
        case 1:
            rect.x = centerX * 2 - 25;
            rect.y = centerY - 25;
            break;
        case 2:
            rect.x = centerX - 25;
            rect.y = centerY * 2 - 25;
            break;
        case 3:
            rect.x = centerX * 2 - 25;
            rect.y = centerY * 2 - 25;
            break;
        default:
            rect.x = rect.y = 0;
            break;
        }
        return rect;
    }(this.id, this.rect.width, this.rect.height));
    ctx.fillText(this.score,
                 scoreRect.x,
                 scoreRect.y);
    //////////// 
    //ScoreBar//
    ////////////

};