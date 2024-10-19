let counter = 0;

//var audio = document.getElementById("survey_audio");
var audio_name = new Audio ("name.ogg");
var audio_drive = new Audio ("drive.ogg");
var audio_walk = new Audio ("walk.ogg");
var audio_connections = new Audio ("family.ogg");
var audio_tools = new Audio ("tools.ogg");

function skip() {
    window.location.href = "survey.html";
}

function two_click() {
    console.log("testing", counter)
    counter++;
    if (counter >= 2) {
        window.location.href = "survey.html?blind=1";
    }
}

var parameter_exist = "";

function check_if_blind(){
    const parameters = new URLSearchParams(window.location.search);
        if (parameters.has('blind')) {
            parameter_exist = "yes";
            console.log(parameters.has('blind'));
            counter++;
            console.log(counter);
            audio_name.play();
        }

}

function read_blind(){
    console.log(parameter_exist);
    if (parameter_exist == "yes") {
        if (counter == 1){
            audio_drive.play();
            counter++;
        }else if (counter == 2){
            audio_walk.play();
            counter++;
        }else if (counter ==3){
            audio_connections.play();
            counter++;
        }else if (counter ==4){
            audio_tools.play();
            counter++;
    }
}
}
