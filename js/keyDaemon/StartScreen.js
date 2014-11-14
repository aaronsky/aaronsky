//Stephen's JS for the startScreen
//When the core instantiates the level variable for the first time
//  It will be set to a startScreen object
//  StartScreen will then set the core's level to a RulesMenu object when the StartScreen is done
//    -  Set the core's current level with core.getInstance().currentLevel;

"use strict";

function StartScreen(centerX, centerY)  {
    this.rect = {
        centerX: centerX,
        centerY: centerY
    };
    
    this.randomFun = Math.floor((Math.random() * 100));
    
    this.backgroundColor = "#545252";
    this.textColor = "#CDCDCD";    
}

StartScreen.prototype = {constructor: StartScreen};

StartScreen.prototype.update = function () {
//    var i = 0,
//        len = this.titleText.length;
//    for (i; i < len; i += 1) {
//        this.titleText[i].update(1);
//        if (!this.titleText[i].done) {
//            break;
//        }
//    }
    //Add a mouse event listener and a keyboard event listener
    //Both a click on the button, or an enter keypress should call the end function
    if ( InputManager.keys[ 13 ] ){ // OR when the player clicks on a "go" button
        this.end();   
    }
}

StartScreen.prototype.draw = function (ctx) {
    var height = this.rect.centerY * 2;
    var heightSeg = height/4;
    var width = this.rect.centerX * 2;
    
    ctx.fillStyle = "#FDE8E8";
    ctx.fillRect(0,0,width,heightSeg);
   
    ctx.fillStyle = "#E7E9F5";
    ctx.fillRect(0,heightSeg,width,heightSeg);
    
    ctx.fillStyle = "#FEF8DA";
    ctx.fillRect(0,heightSeg * 2,width,heightSeg);
    
    ctx.fillStyle = "#E3EFD0";
    ctx.fillRect(0,heightSeg * 3,width,heightSeg);
    
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    
    ctx.fillStyle = '#343434';
    ctx.font = 'normal 72pt Raleway Thin';
    if(this.randomFun == 1){
        ctx.fillText("Type 4 Diabetes",20,heightSeg/2);
    }else{
        ctx.fillText("Key-Daemon",20,heightSeg/2);
    }
    ctx.font = 'normal 18pt Raleway Thin';
    ctx.fillStyle = '#242424';
    ctx.fillText("A game by Aaron Sky, Richard Weiss, Doug Watro, and Stephen Garabedian",20,height - 20);
    
    ctx.textAlign = 'right';
    ctx.fillStyle = '#343434';
    ctx.font = 'normal 72pt Raleway Thin';
    ctx.fillText("Press Enter",width - 20,heightSeg*3 - heightSeg/2);
    
}

StartScreen.prototype.end = function () {
    var instance = Core.getInstance();
    instance.setCurrentLevel(new RulesMenu(this.rect.centerX, this.rect.centerY, 10));
}