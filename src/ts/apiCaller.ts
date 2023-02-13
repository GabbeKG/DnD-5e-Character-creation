

var alignment: any[]= [];
var _classes: any[]=[];
var races:any[]=[];
var raceBonuses:any[]=[];
var standardArray:number[]=[15,14,13,12,10,8];


const apiClasses='https://www.dnd5eapi.co/api/classes/?results';
const apiAlignment='https://www.dnd5eapi.co/api/alignments/?results';
const apiRaces='https://www.dnd5eapi.co/api/races/?results'
getOptions();

async function getOptions():Promise <void> {
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


}
//ABILITY SCORE OPTIONS
const asOptions=document.getElementsByClassName("ab-score");
for(let i = 0; i<standardArray.length;i++){
  for(let j=0;j<standardArray.length;j++){
    var opt=new Option(standardArray[j].toString());
    opt.className='ab-score-option';
    opt.value=standardArray[j].toString();
    opt.text=standardArray[j].toString();
    asOptions[i].appendChild(opt);
  }
}


        