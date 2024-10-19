let blind = "no"
let counter = 0
function skip(){
    window.location.href = "survey_ONE.html";
}

export function two_click(){
    counter++
    if (counter >= 2){
        blind = "yes"
    }
}
