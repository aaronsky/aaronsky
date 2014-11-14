//Doug's Javascript. Direct all hate to Doug.
"use strict";
function RuleFadeIn(x, y, fadeSpeed, text, textSize, textColor) {
    this.x = x || 0;
    this.y = y || 0;
	this.text = text || "";
    this.font = {
        size: textSize || 25,
        color: textColor || "#CDCDCD"
    };
	this.alpha = 0;
	this.done = false;
	this.speed = fadeSpeed || 1;
}

RuleFadeIn.prototype = {constructor: RuleFadeIn};

RuleFadeIn.prototype.update = function (dt) {
	if (!this.done) {
		this.alpha += this.speed * dt;
		if (this.alpha > 255) {
			this.done = true;
		}
	}
};

RuleFadeIn.prototype.draw = function (ctx) {
	ctx.textAlign = 'left';
	ctx.textBaseline = 'hanging';
	ctx.font = 'normal ' + this.font.size + 'pt Raleway Light';
	var colorWidth = ctx.measureText("Pick A Color").width + 50;

	ctx.globalAlpha = this.alpha / 255;
    ctx.fillStyle = this.font.color;
	ctx.fillText(this.text, this.x, this.y);
	ctx.globalAlpha = 1;
};
