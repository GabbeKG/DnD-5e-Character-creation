createLandingPage();
async function createLandingPage():Promise <void>{

    
    const createChar=document.getElementById('container');
    //#HERO_SECTION 
    const newheroSection=document.createElement('section')
    newheroSection.id='hero-section';
    createChar?.appendChild(newheroSection);
    
    //Character Name
    
    const newCharlbl=document.createElement('label');
newCharlbl.className='lblHero';
newCharlbl.innerHTML='Character Name: ';
newheroSection.appendChild(newCharlbl);

const newCharNameInput=document.createElement('input');
newCharNameInput.type='text';
newCharNameInput.placeholder='Your Character Name...';
newCharlbl.appendChild(newCharNameInput);

//Class

const newClassLbl=document.createElement('label');
newClassLbl.className='lblHero';
newClassLbl.innerHTML='Class: ';
const newSelectClass=document.createElement('select');
newSelectClass.id='clsSelect';
const newClassOption=document.createElement('option');
newClassOption.value='';
newClassOption.text='Select your class...';
newSelectClass.appendChild(newClassOption);
newheroSection.appendChild(newClassLbl);
newClassLbl.appendChild(newSelectClass);

//Level

const newLevelLbl=document.createElement('label');
newLevelLbl.className='lblHero';
newLevelLbl.innerHTML='Level: ';
const newLevelInput=document.createElement('input');
newLevelInput.type='number';
newLevelInput.value='1';
newLevelInput.min='1';
newLevelLbl.appendChild(newLevelInput);
newheroSection.appendChild(newLevelLbl);

//Race

const newRaceLbl=document.createElement('label');
newRaceLbl.className='lblHero';
newRaceLbl.innerHTML='Race: ';
const newRaceSelect=document.createElement('select');
newRaceSelect.id='raceSelect';
newheroSection.appendChild(newRaceLbl);
newRaceLbl.appendChild(newRaceSelect);

//Aligment

const newAlignmentLbl=document.createElement('label');
newAlignmentLbl.className='lblHero';
newAlignmentLbl.innerHTML='Alignment: ';
const newAlignmentSelect=document.createElement('select');
newAlignmentSelect.id='alignmentSelect';
newheroSection.appendChild(newAlignmentLbl);
newAlignmentLbl.appendChild(newAlignmentSelect);

// Experience Points

const newXpLbl=document.createElement('label');
newXpLbl.className='lblHero';
const newXpInput=document.createElement('input');
newXpInput.type='number';
newXpInput.min='0';

// Player Name FEATURE POSTPONED


//

//#endregion

//#region Ability Score/Stats
const newDiv=document.createElement('div')
newDiv.className='wrapper';
const newStatBlock=document.createElement('div');
newStatBlock.id='stat-block';
createChar?.appendChild(newDiv);
newDiv.appendChild(newStatBlock);

//STRENGTH

const newStrInfo=document.createElement('div');
newStrInfo.className='info';
newStrInfo.innerHTML='Strength &#x1F6C8';
const newStrSpan=document.createElement('span');
newStrSpan.className='tooltip';
newStrSpan.innerHTML='Strength measures bodily power, athletic Training, and the extent to which you can exert raw physical force.';
newStatBlock.appendChild(newStrInfo);
newStrInfo.appendChild(newStrSpan);

const newStrAttr=document.createElement('div');
newStrAttr.className='attribute';
const newStrSelect=document.createElement('select');
newStrSelect.className='ab-score str';

const newStrMod=document.createElement('div');
newStrMod.className='ab-mod str';
newStatBlock.appendChild(newStrAttr);
newStrAttr.appendChild(newStrSelect);
newStrAttr.appendChild(newStrMod);

//DEXTERITY

const newDexInfo=document.createElement('div');
newDexInfo.className='info';
newDexInfo.innerHTML='Dexterity &#x1F6C8';
const newDexSpan=document.createElement('span');
newDexSpan.className='tooltip';
newDexSpan.innerHTML='Dexterity measures agility, reflexes, and balance. Also effects Initiative.';
newStatBlock.appendChild(newDexInfo);
newDexInfo.appendChild(newDexSpan);

const newDexAttr=document.createElement('div');
newDexAttr.className='attribute';
const newDexSelect=document.createElement('select');
newDexSelect.className='ab-score dex';
const newDexMod=document.createElement('div');
newDexMod.className='ab-mod dex';
newStatBlock.appendChild(newDexAttr);
newDexAttr.appendChild(newDexSelect);
newDexAttr.appendChild(newDexMod);

//Constitution
const newConInfo=document.createElement('div');
newConInfo.className='info';
newConInfo.innerHTML='Constitution &#x1F6C8';
const newConSpan=document.createElement('span');
newConSpan.className='tooltip';
newConSpan.innerHTML='Constitution measures health, stamina, and vital force.';
newStatBlock.appendChild(newConInfo);
newConInfo.appendChild(newConSpan);

const newConAttr=document.createElement('div');
newConAttr.className='attribute';
const newConSelect=document.createElement('select');
newConSelect.className='ab-score con';
const newConMod=document.createElement('div');
newConMod.className='ab-mod con';
newStatBlock.appendChild(newConAttr);
newConAttr.appendChild(newConSelect);
newConAttr.appendChild(newConMod);

//Intelligence

const newIntInfo=document.createElement('div');
newIntInfo.className='info';
newIntInfo.innerHTML='Intelligence &#x1F6C8';
const newIntSpan=document.createElement('span');
newIntSpan.className='tooltip';
newIntSpan.innerHTML='Intelligence measures mental acuity, accuracy of recall, and the ability to reason.';
newStatBlock.appendChild(newIntInfo);
newIntInfo.appendChild(newIntSpan);

const newIntAttr=document.createElement('div');
newIntAttr.className='attribute';
const newIntSelect=document.createElement('select');
newIntSelect.className='ab-score int';
const newIntMod=document.createElement('div');
newIntMod.className='ab-mod int';
newStatBlock.appendChild(newIntAttr);
newIntAttr.appendChild(newIntSelect);
newIntAttr.appendChild(newIntMod);

//Wisdom

const newWisInfo=document.createElement('div');
newWisInfo.className='info';
newWisInfo.innerHTML='Wisdom &#x1F6C8';
const newWisSpan=document.createElement('span');
newWisSpan.className='tooltip';
newWisSpan.innerHTML='Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition.';
newStatBlock.appendChild(newWisInfo);
newWisInfo.appendChild(newWisSpan);

const newWisAttr=document.createElement('div');
newWisAttr.className='attribute';
const newWisSelect=document.createElement('select');
newWisSelect.className='ab-score wis';
const newWisMod=document.createElement('div');
newWisMod.className='ab-mod wis';
newStatBlock.appendChild(newWisAttr);
newWisAttr.appendChild(newWisSelect);
newWisAttr.appendChild(newWisMod);

//Charisma

const newChaInfo=document.createElement('div');
newChaInfo.className='info';
newChaInfo.innerHTML='Charisma &#x1F6C8';
const newChaSpan=document.createElement('span');
newChaSpan.className='tooltip';
newChaSpan.innerHTML='Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding Personality.';
newStatBlock.appendChild(newChaInfo);
newChaInfo.appendChild(newChaSpan);

const newChaAttr=document.createElement('div');
newChaAttr.className='attribute';
const newChaSelect=document.createElement('select');
newChaSelect.className='ab-score cha';
const newChaMod=document.createElement('div');
newChaMod.className='ab-mod cha';
newStatBlock.appendChild(newChaAttr);
newChaAttr.appendChild(newChaSelect);
newChaAttr.appendChild(newChaMod);

//Disabling stat select elements to await class select option
const statSelectors=document.querySelectorAll('#stat-block select') as NodeListOf<HTMLSelectElement>;
for(let i=0;i<statSelectors.length;i++){
    statSelectors[i].disabled=true;
}

//#region Ability Modifiers

const abi_modifier=document.createElement('div');
abi_modifier.id='ability-mod';
newDiv.appendChild(abi_modifier);

//Insperation

const newInspirationDiv=document.createElement('div');
abi_modifier.appendChild(newInspirationDiv);
newInspirationDiv.className='inspiration';

const newInspirationValue=document.createElement('div');
newInspirationValue.className='inspireValue'
newInspirationValue.innerHTML='-';
const newInspirationLbl=document.createElement('label');
newInspirationLbl.id='inspiration';
newInspirationLbl.innerHTML='Inspiration &#x1F6C8';
const newInspirationSpan=document.createElement('span');
newInspirationSpan.className='tooltip';
newInspirationSpan.innerHTML='Inspiration is left blank at the moment, this can be rewarded by the Dungeon Master or gifted by a companion.';

newInspirationDiv.appendChild(newInspirationValue);
newInspirationDiv.appendChild(newInspirationLbl);
newInspirationDiv.appendChild(newInspirationSpan)

//Profiency Bonus

const newProfBonusDiv=document.createElement('div');
abi_modifier.appendChild(newProfBonusDiv);
newProfBonusDiv.className='bonusDiv';
const newProfBonusValue=document.createElement('div');
newProfBonusValue.className='bonusValue';
newProfBonusValue.innerHTML='+2';
const newProfBonusLbl=document.createElement('label');
newProfBonusLbl.id='proficiency_bonus';
newProfBonusLbl.innerHTML='Proficiency Bonus';
newProfBonusDiv.appendChild(newProfBonusValue);
newProfBonusDiv.appendChild(newProfBonusLbl);

//Saving Throws *lists ability scores

var asArr:string[]=['Strength','Dexterity', 'Constitution', 'Intelligence','Wisdom', 'Charisma'];

const newSavingThrowDiv=document.createElement('div');
newSavingThrowDiv.className='saving-throwsDiv';
abi_modifier.appendChild(newSavingThrowDiv);
const newSavingThrowLbl=document.createElement('label');
newSavingThrowLbl.id='saving-throws';
newSavingThrowLbl.innerHTML='Saving Throws';
newSavingThrowDiv.appendChild(newSavingThrowLbl);
//const newSavingThrowValue=document.createElement('div');
const newSavingThrowList=document.createElement('ul');
newSavingThrowDiv.appendChild(newSavingThrowList);
for(let i=0;i<asArr.length;i++){
    const newSavingThrowListItem=document.createElement('li')
    newSavingThrowListItem.innerHTML=asArr[i];
    newSavingThrowList.appendChild(newSavingThrowListItem);
    
}

const newSkillsDiv=document.createElement('div');
newSkillsDiv.className='skillsDiv';
abi_modifier.appendChild(newSkillsDiv);
const newSkillsLbl=document.createElement('label');
newSkillsLbl.id='skills';
newSkillsLbl.innerHTML='Skills';
newSkillsDiv.appendChild(newSkillsLbl);
const loaderText=document.createElement('div');
loaderText.id='loader';
loaderText.innerText='Loading...';
const loader=document.createElement('div');
loader.className='loader';
newSkillsDiv.appendChild(loaderText);
newSkillsDiv.appendChild(loader);

const newSkillList=document.createElement('ul');
newSkillList
newSkillsDiv.appendChild(newSkillList);

//BUTTON
const btnDiv=document.createElement('div')
const saveBtn=document.createElement('button');
saveBtn.id='save';
saveBtn.innerText='Save Character';
newDiv.appendChild(saveBtn);
}