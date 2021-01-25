var prevHero = "hero1"
var currentHero = "hero1"

function previous_hero(){
    var id=Number(currentHero.substring(4))
    if ((id-1)==0){return;}
    var prev_id=id-1
    check("hero"+prev_id)
}
function next_hero(){
    var id=Number(currentHero.substring(4))
    console.log("id",id)
    if ((id+1)==5){return;}
    var next_id=id+1
    console.log("next_id",next_id)
    check("hero"+next_id)
}

function check(id){
    currentHero=id
    if (prevHero != 0){
        document.getElementById(prevHero).classList.remove('hero_active');
        document.getElementById(prevHero+"_name").classList.remove('hero-short-info__name_active');
        document.getElementById(prevHero+"_perks_list").classList.remove('perks-list_active')
        
        for ( var i=0; i<4;i++ ){
            document.getElementById(prevHero+"_perks-list__item"+i).classList.remove('perks-list__item_active');
            document.getElementById(prevHero+"_ability"+i).classList.remove('active');
        }
    }
    
    prevHero=id
    document.getElementById(id).classList.add('hero_active');
    document.getElementById(id+"_name").classList.add('hero-short-info__name_active');
    document.getElementById(id+"_perks_list").classList.add('perks-list_active');
    
    for ( var i=0; i<4;i++ ){
        console.log("id+_ability+i",id+"_ability"+i)
        document.getElementById(id+"_perks-list__item"+i).classList.add('perks-list__item_active');
        document.getElementById(id+"_ability"+i).classList.add('active');
    }


}