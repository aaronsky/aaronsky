"use strict";
function Word(newWord, x, y) {
    this.word = newWord || '';
    this.remainingWord = this.word;
    this.completed = '';
    this.center = {
        x: x || 400, //debug values
        y: y || 300
    };
    this.solved = false;
}
Word.prototype = {constructor: Word};
Word.prototype.update = function (keys) {
    var nextLetter = this.remainingWord.charAt(0).toUpperCase();
    if (keys[nextLetter]) {
        this.completed += this.remainingWord.charAt(0);
        this.remainingWord = this.remainingWord.substr(1);
    }
    if (this.remainingWord.length === 0 && this.completed === this.word) {
        console.log('word done');
        this.solved = true;
    }
        
};
Word.prototype.draw = function (ctx, completedColor, selectedColor) {
	var fontSize = '40';
	ctx.font = 'normal ' + fontSize + 'pt Raleway Thin';
	var remWordSize = ctx.measureText(this.remainingWord).width;
	ctx.font = 'normal ' + fontSize + 'pt Raleway Thin';
	var comWordSize = ctx.measureText(this.completed).width;
	ctx.font = 'normal ' + fontSize + 'pt Raleway Thin';
	var letterSize = ctx.measureText(this.remainingWord.charAt(0)).width,
        wordSize = remWordSize + comWordSize,
        lineY = 32;
	
	
	ctx.textAlign = "left";
	ctx.textBaseline = 'middle';
	ctx.fillStyle = '#A7A7A7';
	ctx.font = 'normal ' + fontSize + 'pt Raleway Thin';
    ctx.fillText(this.completed, this.center.x - (wordSize / 2), this.center.y);
    ctx.fillStyle = '#000';
	ctx.font = 'normal ' + fontSize + 'pt Raleway Thin';
    ctx.fillText(this.remainingWord, this.center.x - (wordSize / 2) + comWordSize, this.center.y);
	
	ctx.strokeStyle = completedColor;
    ctx.beginPath();
    ctx.moveTo(this.center.x - (wordSize / 2), this.center.y + lineY);
    ctx.lineTo(this.center.x - (wordSize / 2) + comWordSize, this.center.y + lineY);
    ctx.lineWidth = 2;
    ctx.stroke();
	
	ctx.strokeStyle = selectedColor;
	ctx.beginPath();
    ctx.moveTo(this.center.x - (wordSize / 2) + comWordSize, this.center.y + lineY);
    ctx.lineTo(this.center.x - (wordSize / 2) + comWordSize + letterSize, this.center.y + lineY);
    ctx.lineWidth = 4;
    ctx.stroke();
	
	ctx.strokeStyle = '#9A9A9A';
	ctx.beginPath();
    ctx.moveTo(this.center.x - (wordSize / 2) + comWordSize + letterSize, this.center.y + lineY);
    ctx.lineTo(this.center.x + (wordSize / 2), this.center.y + lineY);
    ctx.lineWidth = 2;
    ctx.stroke();
	
	ctx.textAlign = "center";
};
Word.prototype.shuffle = function () {
    //call this when it's time to shuffle
}