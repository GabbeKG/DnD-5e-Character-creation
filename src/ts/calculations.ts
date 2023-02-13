//Ability Modifier calculation
Modifier();
async function Modifier() {
    console.log("ability modifier");
    const abScore = document.querySelectorAll(".ab-score")as NodeListOf<HTMLSelectElement>;
    const abMods=document.querySelectorAll(".ab-mod")as NodeListOf<HTMLDivElement>;
    console.log("CHANGES!!!!!!");
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
    for (var i = 0; i < abScore.length; i++) {
      abMods[i].innerText="";
      abScore[i].addEventListener('change', function() {
        
        var sel=this.value;
        
        console.log(this.selectedIndex);
          //console.log("bonus: "+raceBonuses[0].bonus)    
        
        
        
        var num = parseInt(sel);
        var modifier;
        for(let b=0;b<raceBonuses.length;b++){
            if(!this.parentElement?.className.includes('con')){
                modifier = Math.round(((num+raceBonuses[0].bonus) - 10) / 2);
                console.log(num+raceBonuses[0].bonus);

                console.log('this mod: '+modifier);
            }
            else{
                modifier=Math.round((num-10)/2);
            }
        }
        
      });
      
    }
        }
