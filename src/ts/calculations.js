"use strict";
exports.__esModule = true;
exports.mymod = void 0;
//Ability Modifier calculation
Modifier();
function Modifier() {
    console.log("ability modifier");
    var abScore = document.querySelectorAll(".ab-score");
    var abMods = document.querySelectorAll(".ab-mod");
    console.log("CHANGES!!!!!!");
    for (var i = 0; i < abScore.length; i++) {
        abMods[i].innerText = "";
        abScore[i].addEventListener('change', function () {
            var sel = this.value;
            console.log(this.selectedIndex);
            var num = parseInt(sel);
            console.log(num);
            var modifier = Math.round((num - 10) / 2);
            console.log('this mod: ' + modifier);
        });
    }
}
exports.mymod = Modifier;
