"use strict";
function Level(playerCount, centerX, centerY) {
    this.wordList = WordManager.generateWords();
    this.rect = {
        width: centerX * 2,
        height: centerY * 2,
        centerX: centerX,
        centerY: centerY
    };
    this.players = (function (randomWordCallback) {
        var result = [],
            i = 0;
        for (i; i < playerCount; i += 1) {
            var player = new Player(i, centerX, centerY);
            player.setWord(randomWordCallback());
            result.push(player);
        }
        return result;
    }(this.randomWordFromList.bind(this)));

    //If you want to get rid of the rules screen, change the last number of this delcaration to a 0
    //this.rules = new RulesMenu(this.rect.centerX,this.rect.centerY, 8);
    this.timeLeftSpinner = new LoadSpinner(this.rect.width / 20,
                                           60,
                                           "#DCDCDB",
                                           "#6D6D6D",
                                           this.rect.centerX,
                                           this.rect.centerY);
    this.timeLeftSpinner.isOn(true);
}
Level.prototype = {constructor: Level};
Level.prototype.update = function () {
    if (this.timeLeftSpinner.isDone()) {
        var scores = [];
        this.players.forEach(function (player) {
            scores.push(player.score);
        });
        var instance = Core.getInstance();
        instance.setCurrentLevel(new EndScreen(scores, this.rect.centerX, this.rect.centerY));
    } else {
        //Pick Mode randomly??
        this.players.forEach(function (player) { player.update(); });
        this.timeLeftSpinner.update();
    }
};
Level.prototype.randomWordFromList = function () {
    return this.wordList[Math.floor(Math.random() * (this.wordList.length + 1))];
};
Level.prototype.draw = function (ctx) {
    this.players.forEach(function (player) { 
        player.draw(ctx); 
    });
    //this.timeLeftSpinner.draw(ctx);
    this.drawTimer(ctx);
};
Level.prototype.drawTimer = function (ctx) {
    var timerAmt = this.rect.width * ((this.timeLeftSpinner.time - this.timeLeftSpinner.elapsedTime) / this.timeLeftSpinner.time);
    var grad;
    
    ctx.fillStyle = '#8D8D8D';
    ctx.fillRect(0,0,this.rect.width,7);
    ctx.fillRect(0,this.rect.height - 7,this.rect.width,this.rect.height);
    ctx.fillStyle = '#DCDCDC';
    ctx.fillRect(0,0,timerAmt,7);
    ctx.fillRect(0,this.rect.height - 7,timerAmt,this.rect.height);
    
//    grad = ctx.createLinearGradient(timerAmt - 70,0,70,30);
//    grad.addColorStop(0,'#6D6D6D');
//    grad.addColorStop(1,'#DCDCDC');
//    
//    ctx.rect(timerAmt - 70,0,70,30);
//    ctx.fillStyle = grad;
//    ctx.fill();
    
};
