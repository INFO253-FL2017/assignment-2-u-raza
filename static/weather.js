$(document).ready(function(){
    gettingJSON();
});
function gettingJSON(){
    
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=5327684&units=imperial&APPID=954659afe387a7d5d597c0017ffd0b52",function(json){
        document.getElementById("weather").innerHTML = "Berkeley - Temp " + json["main"]["temp"] + " F";
    });
};
