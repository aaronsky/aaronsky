//Doug's Javascript. Direct all hate to Doug.
"use strict";
//This thingy here will cause a little spinny timer to appear wherever you tell it to. 
//It counts down from a number that should be passed in.
//When it reaches 0 it stops.
//Kinda basic timer shit going on here nothing special.
//Keep in mind this is purely visual. It doesn't callback anything or whatever when it completes.
//Well it kinda does, but not really.
//I assume we're going to have an actual delta time somewhere someday. 
//Shitty Delta Time ripoff should be replaced with real Delta Time when that happens.
function LoadSpinner(radius, time, baseColor, strokeColor, centerX, centerY, onCompletion) {

    //Bullshit Delta Time Ripoff, Original Was Better, Dub is horrible, Watch with subs
    this.thisTime = Date.now();
    this.startTime = this.thisTime;
    this.time = time;
    this.elapsedTime = this.time;
    this.on = false;
    this.done = false;

    //This be what the loading circle should look like
    this.circle = {
        radius: radius,
        centerX: centerX,
        centerY: centerY
    };

    //Colors in an array, I'ma use % to choose between index 0 and 1
    this.strokeColor = [baseColor, strokeColor];
    this.onCompletion = onCompletion || function () {};
}
LoadSpinner.prototype = {constructor: LoadSpinner};
LoadSpinner.prototype.update = function () {

    if (this.on) {
        //Does Delta time stuff
        this.lastTime = this.thisTime;
        this.thisTime = Date.now();
        this.elapsedTime = this.thisTime - this.startTime;
        //Second-ifys it
        this.elapsedTime = this.elapsedTime / 1000;
        //Reverses it
        this.elapsedTime = this.time - this.elapsedTime;
    } else {
        this.elapsedTime = this.time;
    }

    if (Math.ceil(this.elapsedTime) <= 0) {
        this.elapsedTime = 0;
        this.done = true;
        this.onCompletion.apply(this);
    }
};
LoadSpinner.prototype.isOn = function (isItOn) {
    if (isItOn) {
        this.on = true;
        this.thisTime = Date.now();
        this.startTime = this.thisTime;
    } else {
        this.on = false;
    }
};
LoadSpinner.prototype.isDone = function () {
    return this.done;
};
LoadSpinner.prototype.draw = function (ctx) {

    //Debug Stuff
    //Draws a bigass rect so I can see the spinner ageinst a solid background.
    //ctx.fillStyle = "#545252";
    //ctx.fillRect(0,0,2000,2000);
    //End Debug Stuff

    //Decimal is used to computer the arc of the loading circle
    var arcDecimal = Math.ceil(this.elapsedTime) - this.elapsedTime,
        strokeSize = this.circle.radius / 20;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'normal ' + this.circle.radius + 'pt Lato Light';

    //Main circle
    ctx.beginPath();
    ctx.fillStyle = "#6D6D6D";
    ctx.arc(this.circle.centerX,
            this.circle.centerY,
            this.circle.radius,
            0,
            2 * Math.PI, false);
    ctx.fill();

    //Arc with the Color of the previous loading bar
    ctx.lineWidth = strokeSize;
    ctx.beginPath();
    ctx.strokeStyle = this.strokeColor[(Math.ceil(this.elapsedTime) + 1) % 2];
    ctx.arc(this.circle.centerX,
            this.circle.centerY,
            this.circle.radius - strokeSize * 0.5,
            -Math.PI * 0.5,
            2 * Math.PI * arcDecimal - Math.PI * 0.5,
            true);
    ctx.stroke();

    //Arc with the color of the "next" loading bar. I don't know a better way to make this make sense. 
    //Honestly, though, nobody really needs to touch this stuff so don't worry about understanding whats going on here.
    ctx.lineWidth = strokeSize;
    ctx.beginPath();
    ctx.strokeStyle = this.strokeColor[Math.ceil(this.elapsedTime) % 2];
    ctx.arc(this.circle.centerX,
            this.circle.centerY,
            this.circle.radius - strokeSize * 0.5,
            -Math.PI * 0.5,
            2 * Math.PI * arcDecimal - Math.PI * 0.5,
            false);
    ctx.stroke();

    ctx.fillStyle = this.strokeColor[0];
    ctx.fillText(Math.ceil(this.elapsedTime), this.circle.centerX, this.circle.centerY);
};
