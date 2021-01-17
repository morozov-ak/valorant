var selectedHero = "hero1_ability"

function check(id){
    console.log("Хранящийся selectedHero:",selectedHero)
    if (selectedHero != 0){document.getElementById(selectedHero).classList.remove('active');}
    //
    selectedHero=id+"_ability"
    console.log("sdfgsd id:",id+"_ability")
    console.log("sdfgsd id:",document.getElementById("hero_perks"))
    
    document.getElementById(id+"_ability").classList.add('active');
    
    
    
}