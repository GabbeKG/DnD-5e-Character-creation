"use strict";
exports.__esModule = true;
exports.createLandingPage = void 0;
function createLandingPage() {
    var createChar = document.getElementById('#container');
    //#HERO_SECTION 
    var newheroSection = document.createElement('section');
    newheroSection.id = 'hero-section center';
    //Character Name
    var newCharlbl = document.createElement('label');
    newCharlbl.className = 'lblHero';
    newCharlbl.innerHTML = 'Character Name: ';
    newheroSection.appendChild(newCharlbl);
    var newCharNameInput = document.createElement('input');
    newCharNameInput.type = 'text';
    newCharNameInput.placeholder = 'Your Character Name...';
    newCharlbl.appendChild(newCharNameInput);
    //Class
    var newClassLbl = document.createElement('label');
    newClassLbl.className = 'lblHero';
    newClassLbl.innerHTML = 'Class: ';
    var newSelectClass = document.createElement('select');
    newSelectClass.id = 'clsSelect';
    newheroSection.appendChild(newClassLbl);
    newClassLbl.appendChild(newSelectClass);
    //Level
    var newLevelLbl = document.createElement('label');
    newLevelLbl.className = 'lblHero';
    newLevelLbl.innerHTML = 'Level: ';
    var newLevelInput = document.createElement('input');
    newLevelInput.type = 'number';
    newLevelInput.min = '1';
    newLevelLbl.appendChild(newLevelInput);
    newheroSection.appendChild(newLevelLbl);
    //Race
    var newRaceLbl = document.createElement('label');
    newRaceLbl.className = 'lblHero';
    newRaceLbl.innerHTML = 'Race: ';
    var newRaceSelect = document.createElement('select');
    newRaceSelect.id = 'raceSelect';
    newheroSection.appendChild(newRaceLbl);
    newRaceLbl.appendChild(newRaceSelect);
    //Aligment
    var newAlignmentLbl = document.createElement('label');
    newAlignmentLbl.className = 'lblHero';
    newAlignmentLbl.innerHTML = 'Alignment: ';
    var newAlignmentSelect = document.createElement('select');
    newAlignmentSelect.id = 'alignmentSelect';
    // Experience Points
    var newXpLbl = document.createElement('label');
    newXpLbl.className = 'lblHero';
    var newXpInput = document.createElement('input');
    newXpInput.type = 'number';
    newXpInput.min = '0';
    // Player Name FEATURE POSTPONED
    //
    //#endregion
    //#region Ability Score/Stats
}
exports.createLandingPage = createLandingPage;
