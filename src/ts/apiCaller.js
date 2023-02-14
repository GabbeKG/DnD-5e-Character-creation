var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var alignment = [];
var _classes = [];
var races = [];
var raceBonuses = [];
var skillArr = [];
var skillArrIndex = [];
var standardArray = ['Select score...', 15, 14, 13, 12, 10, 8];
var apiClasses = 'https://www.dnd5eapi.co/api/classes/?results';
var apiAlignment = 'https://www.dnd5eapi.co/api/alignments/?results';
var apiRaces = 'https://www.dnd5eapi.co/api/races/?results';
var apiSkill = 'https://www.dnd5eapi.co/api/skills?results';
var apiSkillIndex = 'https://www.dnd5eapi.co/api/skills/';
var apiBase = 'https://www.dnd5eapi.co';
getData();
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var alignRes, align, alignmentOptions, i, option, classRes, _class, classOptions, i, option, raceRes, race, raceOptions, i, option, skillRes, skill, i, index, skillIndexRes, s, asRes, asJson, loaderText, loader, skillList, i, newSkillListItem, newSkillListItemInp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(apiAlignment)];
                case 1:
                    alignRes = _a.sent();
                    return [4 /*yield*/, alignRes.json()];
                case 2:
                    align = _a.sent();
                    console.log(align);
                    align.results.map(function (element) {
                        alignment.push(element);
                    });
                    alignmentOptions = document.querySelector("#alignmentSelect");
                    for (i = 0; i < alignment.length; i++) {
                        option = new Option(alignment[i].name);
                        option.value = alignment[i].name;
                        option.text = alignment[i].name;
                        alignmentOptions === null || alignmentOptions === void 0 ? void 0 : alignmentOptions.appendChild(option);
                    }
                    return [4 /*yield*/, fetch(apiClasses)];
                case 3:
                    classRes = _a.sent();
                    return [4 /*yield*/, classRes.json()];
                case 4:
                    _class = _a.sent();
                    console.log(_class);
                    _class.results.map(function (element) {
                        _classes.push(element);
                    });
                    classOptions = document.querySelector("#clsSelect");
                    for (i = 0; i < _classes.length; i++) {
                        console.log(_classes[i].name);
                        option = new Option(_classes[i].name);
                        option.value = _classes[i].name;
                        option.text = _classes[i].name;
                        classOptions === null || classOptions === void 0 ? void 0 : classOptions.appendChild(option);
                    }
                    return [4 /*yield*/, fetch(apiRaces)];
                case 5:
                    raceRes = _a.sent();
                    return [4 /*yield*/, raceRes.json()];
                case 6:
                    race = _a.sent();
                    console.log(race);
                    race.results.map(function (element) {
                        races.push(element);
                    });
                    raceOptions = document.querySelector("#raceSelect");
                    for (i = 0; i < races.length; i++) {
                        option = new Option(races[i].name);
                        option.value = races[i].name;
                        option.text = races[i].name;
                        raceOptions === null || raceOptions === void 0 ? void 0 : raceOptions.appendChild(option);
                    }
                    return [4 /*yield*/, fetch(apiSkill)];
                case 7:
                    skillRes = _a.sent();
                    return [4 /*yield*/, skillRes.json()];
                case 8:
                    skill = _a.sent();
                    console.log(skill);
                    skill.results.map(function (element) {
                        skillArr.push(element.name);
                    });
                    i = 0;
                    _a.label = 9;
                case 9:
                    if (!(i < skillArr.length)) return [3 /*break*/, 15];
                    index = skillArr[i].toLowerCase();
                    return [4 /*yield*/, fetch(apiSkillIndex + index.toString().replace(/ /g, '-') + '?results')];
                case 10:
                    skillIndexRes = _a.sent();
                    return [4 /*yield*/, skillIndexRes.json()];
                case 11:
                    s = _a.sent();
                    console.log(s.ability_score);
                    return [4 /*yield*/, fetch(apiBase + s.ability_score.url + '?results')];
                case 12:
                    asRes = _a.sent();
                    return [4 /*yield*/, asRes.json()];
                case 13:
                    asJson = _a.sent();
                    skillArrIndex.push(asJson.name);
                    _a.label = 14;
                case 14:
                    i++;
                    return [3 /*break*/, 9];
                case 15:
                    loaderText = document.querySelector('#loader');
                    loader = document.querySelector('.loader');
                    skillList = document.querySelector(".skillsDiv ul");
                    for (i = 0; i < skillArr.length; i++) {
                        newSkillListItem = document.createElement('li');
                        newSkillListItemInp = document.createElement('input');
                        newSkillListItemInp.type = 'checkbox';
                        newSkillListItemInp.value = skillArr[i];
                        newSkillListItem.innerHTML = skillArr[i] + ' (' + skillArrIndex[i] + ')';
                        newSkillListItem.appendChild(newSkillListItemInp);
                        skillList === null || skillList === void 0 ? void 0 : skillList.appendChild(newSkillListItem);
                    }
                    loaderText.style.display = 'none';
                    loader.style.display = 'none';
                    return [2 /*return*/];
            }
        });
    });
}
//ABILITY SCORE OPTIONS
var asOptions = document.getElementsByClassName("ab-score");
for (var i = 0; i < standardArray.length; i++) {
    for (var j = 0; j < standardArray.length; j++) {
        var opt = new Option(standardArray[j].toString());
        opt.className = 'ab-score-option';
        opt.value = standardArray[j].toString();
        opt.text = standardArray[j].toString();
        (_a = asOptions[i]) === null || _a === void 0 ? void 0 : _a.appendChild(opt);
    }
}
