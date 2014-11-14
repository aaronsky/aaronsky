"use strict";
var WordManager = {
    words: ["nitrocellulose", "naraka", "bumming", "zod", "dinwiddie", "nixes", "overmeek", "underdrainage", "suspensibility", "excrementous", "remarriage", "surname", "superabnormal", "nuclide", "presanctification", "phlegethontic", "hartsville", "unchannelled", "vainglory", "plash", "serumal", "trumpless", "staminodia", "grapy", "stadholdership", "genii", "rekindle", "sourish", "footlocker", "enshrinement", "equalise", "lowish", "bishop", "thrips", "declassify", "prehatred", "undercourtier", "humblebee", "sharen", "blackfigured", "yucatec", "proagrarian", "intransigeance", "inalienable", "yearner", "precuring", "nonsoluble", "palaeocene", "unremonstrating", "broodier"],
    generateWords: function () {
        var result = [],
            i = 0,
            count = 50;
        for (i; i < count; i += 1) {
            result.push(WordManager.words[Math.floor(Math.random() * (count + 1))]);
        }
        return result;
    }
};