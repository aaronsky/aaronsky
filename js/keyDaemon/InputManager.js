"use strict";
var InputManager = {
    keys: [],
    keyVerify: function (e) {
        e = e || event; //IE Compatibility
        if ( e.keyCode != 13 )
        {
            var codeFromKey = this.keycodeToChar(e.keyCode);
            this.keys[codeFromKey] = e.type === 'keydown'; //true if keydown event, 
                                                     //false if anything else
        }
        else
        {
            this.keys[13] = e.type === 'keydown';   
        }
    },
    keyHandle: function (word) {
        word.update(this.keys);
    },
    keycodeToChar: function (code) {
        var letter = String.fromCharCode((96 <= code && code <= 105) ? code - 48 : code);
        return letter;
    }
};

document.addEventListener("keydown", InputManager.keyVerify.bind(InputManager));

document.addEventListener("keyup", InputManager.keyVerify.bind(InputManager));
