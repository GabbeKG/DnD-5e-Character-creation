
//Ability Modifier calculation



Modifier()


async function Modifier() {
    console.log("ability modifier");
    const abScore = document.querySelectorAll(".ab-score")as NodeListOf<HTMLSelectElement>;
    const abMods=document.querySelectorAll(".ab-mod")as NodeListOf<HTMLDivElement>;
    const selectedClass = document.querySelector("#clsSelect")as HTMLSelectElement;
    
    const raceBonus=document.querySelector('#raceSelect') as HTMLSelectElement;
  raceBonus.addEventListener('change',async function(){
    
    raceBonuses=[];
    console.log(raceBonuses);
    var raceB=this.value;
    const bonusRes= await fetch('https://www.dnd5eapi.co/api/races/'+raceB.toLowerCase()+'?results');
    const newBonus= await bonusRes.json();
    newBonus.ability_bonuses.map((element:any)=>{
      raceBonuses.push(element)
    })
    console.log(raceBonuses);
    
  })

  //Apply eventlistener onchange on stat options

    for (var i = 0; i < abScore.length; i++) {
      abMods[i].innerText="";
      abScore[i].addEventListener('change', function() {
        
        var sel=this.value;
        var num = parseInt(sel);
        var modifier;
        for(let b=0;b<raceBonuses.length;b++){
            if(!this.parentElement?.className.includes('con')){
                modifier = Math.round(((num+raceBonuses[0].bonus) - 10) / 2);
                console.log(num+raceBonuses[0].bonus);
                console.log('this mod: '+modifier);            }
            else{
                modifier=Math.round((num-10)/2);
            }
        }        
      });      
    }
    
    selectedClass.addEventListener('change', function(){
    console.log(selectedClass.value);    
        if(selectedClass.value!==('')){

            for(let i=0;i<abScore.length;i++){
                abScore[i].disabled=false;
            }
        }
        else{
            for(let i=0;i<abScore.length;i++){
                abScore[i].disabled=true;
            }
        }
    })
}
