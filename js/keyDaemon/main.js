"use strict";

var Core = (function () {
    var instance;

    function initInstance() {
        var canvas = document.getElementById("game-stage"),
            context = canvas.getContext('2d'),
			//audioCtx = new (window.AudioContext || window.webkitAudioContext)(),
            playerCount = /*window.prompt('player count',4) ||*/ 4,
            centerX = canvas.width / 2,
            centerY = canvas.height / 2,
            level = new StartScreen(centerX, centerY),//level is our gameState. Instantiate it to a startScreen object here
            render = function () {
                level.update();
                level.draw(context);
                window.requestAnimationFrame(function () {render(); });
            },
            getLevel = function(){
                return level;
            },
            setLevel = function (newLevel) {
                level = newLevel;
            }

        context.textAlign = 'center';
        context.textBaseline = 'middle';
        render.call();
        
        return {
            canvas: canvas,
            context: context,
			//audioCtx: audioCtx,
            getCurrentLevel: getLevel,
            setCurrentLevel: setLevel
            
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = initInstance();
            }
            return instance;
        }
    };
}());

Core.getInstance();