

var alignment: any[]= [];
var _classes: any[]=[];
var races:any[]=[];
var raceBonuses:any[]=[];
var skillArr:any[]=[];
var skillArrIndex:any[]=[];
var standardArray:any[]=['Select score...',15,14,13,12,10,8];


const apiClasses='https://www.dnd5eapi.co/api/classes/?results';
const apiAlignment='https://www.dnd5eapi.co/api/alignments/?results';
const apiRaces='https://www.dnd5eapi.co/api/races/?results'
const apiSkill='https://www.dnd5eapi.co/api/skills?results'
const apiSkillIndex='https://www.dnd5eapi.co/api/skills/'
const apiBase='https://www.dnd5eapi.co';
getData();

async function getData():Promise <void> {
    //Alignment
  const alignRes = await fetch(apiAlignment);
  const align= await alignRes.json();
  console.log(align);
  align.results.map((element: any)=>{
    alignment.push(element)
  })
  const alignmentOptions= document.querySelector("#alignmentSelect");
  for(let i=0;i<alignment.length;i++){
    var option=new Option(alignment[i].name);
    option.value=alignment[i].name;
    option.text=alignment[i].name;
    alignmentOptions?.appendChild(option);
  }
  //Classes
  const classRes = await fetch(apiClasses);
  const _class= await classRes.json();
  console.log(_class);
  _class.results.map((element: any)=>{
    _classes.push(element)
  })
  const classOptions= document.querySelector("#clsSelect");
  for(let i=0;i<_classes.length;i++){
    console.log(_classes[i].name);
    var option=new Option(_classes[i].name);
    option.value=_classes[i].name;
    option.text=_classes[i].name;
    classOptions?.appendChild(option);
  }
  //RACES
   const raceRes = await fetch(apiRaces);
  const race= await raceRes.json();
  console.log(race);
  race.results.map((element: any)=>{
    races.push(element)
  })
  const raceOptions= document.querySelector("#raceSelect");
  for(let i=0;i<races.length;i++){
    var option=new Option(races[i].name);
    option.value=races[i].name;
    option.text=races[i].name;
    raceOptions?.appendChild(option);
  }

  //Race Bonuses


  
  //Skills
  
  const skillRes = await fetch(apiSkill);
  const skill= await skillRes.json();
  console.log(skill);
  skill.results.map((element: any)=>{
    skillArr.push(element.name)
  })
  for(let i=0;i<skillArr.length;i++){
    var index=skillArr[i].toLowerCase();
    
    const skillIndexRes=await fetch(apiSkillIndex+index.toString().replace(/ /g,'-')+'?results');
    const s=await skillIndexRes.json();
    console.log(s.ability_score)
    const asRes=await fetch(apiBase+s.ability_score.url+'?results');
    const asJson=await asRes.json();    
      skillArrIndex.push(asJson.name)
    
  }
  const loaderText=document.querySelector('#loader') as HTMLDivElement;
  const loader=document.querySelector('.loader') as HTMLDivElement;
  const skillList= document.querySelector(".skillsDiv ul");
  for(let i=0;i<skillArr.length;i++){
    const newSkillListItem=document.createElement('li');
    const newSkillListItemInp=document.createElement('input');
    newSkillListItemInp.type='checkbox';
    newSkillListItemInp.value=skillArr[i];
    newSkillListItem.innerHTML=skillArr[i]+' ('+skillArrIndex[i]+')';
    newSkillListItem.appendChild(newSkillListItemInp);
    skillList?.appendChild(newSkillListItem);
  }
  loaderText.style.display='none';
  loader.style.display='none';
}

//ABILITY SCORE OPTIONS

const asOptions=document.getElementsByClassName("ab-score");
for(let i = 0; i<standardArray.length;i++){
  for(let j=0;j<standardArray.length;j++){
    var opt=new Option(standardArray[j].toString());
    opt.className='ab-score-option';
    opt.value=standardArray[j].toString();
    opt.text=standardArray[j].toString();
    asOptions[i]?.appendChild(opt);
  }
}


