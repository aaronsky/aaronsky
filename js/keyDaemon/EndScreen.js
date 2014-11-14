"use strict";

function EndScreen(scores, centerX, centerY) {
    this.scores = scores || [];
    this.rect = {
        centerX: centerX,
        centerY: centerY,
        width: centerX * 2,
        height: centerY * 2
    };
    
    this.order = [-1,-1,-1,-1];
    
    for(var i = 0; i < 4; i++)
    {
        var max = -1;
        var player = -1;
        for(var j = 0; j < 4; j++)
        {
            if(this.scores[j] > max)
            {
                if(this.order[0] != j && this.order[1] != j && this.order[2] != j && this.order[3] != j)
                {
                    player = j;
                    max = this.scores[j];
                }
            }
        }
        this.order[i] = player;
    }
    
    for(var i = 0; i < 4; i++)
    {
        console.log(i + ":Player " + (this.order[i]+1) + "  Score: " + this.scores[this.order[i]]);  
    }
    
    this.sizeScores = [];
    this.scoreTotal = 0;
    
    for(var i = 0; i < this.scores.length; i++)
    {
        this.scoreTotal += this.scores[i];
    }
    
    this.scoreBoxSize = [];
    
    for(var i = 0; i < this.scores.length; i++)
    {
        this.scoreBoxSize[i] = (this.scores[this.order[i]] / this.scoreTotal) * this.rect.height;
        console.log(Math.ceil(this.scoreBoxSize[i]));
    }
}

EndScreen.prototype = {constructor: EndScreen};

EndScreen.prototype.update = function () {
};

EndScreen.prototype.draw = function (ctx) {
    
    ctx.fillStyle = this.getColor(this.order[0]);
    ctx.fillRect(0,0,this.rect.width,this.rect.height);

    ctx.textBaseline = 'middle';
    
    
    var boxStart = 0;
    for(var i = 0; i < this.scores.length; i++)
    {
        if(this.scoreBoxSize[i] != 0)
        {
            var scoreRect = {
                x:0,
                y:boxStart,
                width:this.rect.width,
                height:Math.ceil(this.scoreBoxSize[i])
            }
            ctx.fillStyle = this.getColor(this.order[i]);
            ctx.fillRect(0,boxStart,this.rect.width,Math.ceil(this.scoreBoxSize[i]));
            
            ctx.font = 'normal ' + Math.ceil(this.scoreBoxSize[i]/2) +'pt Raleway Thin';
            ctx.fillStyle = '#545454';
            
            if(i == 0){
                ctx.textAlign = 'center';
                ctx.fillText(this.scores[this.order[i]],this.rect.centerX,boxStart + Math.ceil(scoreRect.height/2));
                ctx.textAlign = 'left';
                ctx.font = 'normal 20pt Raleway Thin';
                ctx.fillText("Winner",10,boxStart + 20);
            }else{
                ctx.textAlign = 'center';
                ctx.fillText(this.scores[this.order[i]],this.rect.centerX,boxStart + Math.ceil(scoreRect.height/2));
                ctx.textAlign = 'left';
                ctx.font = 'normal 20pt Raleway Thin';
                ctx.fillText("Loser",10,boxStart + scoreRect.height - 20);
            }
            boxStart += scoreRect.height;
        }
    }    
};

EndScreen.prototype.getColor = function(index){
  switch(index)
  {
    case 0:
        return "#FDE8E8";
    case 1:
        return "#E7E9F5";
    case 2:
        return "#FEF8DA";
    case 3:
        return "#E3EFD0";
  }
    return "Fcuk...";
};