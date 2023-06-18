exports.getDate=function (){
    let today =  new Date() ;
    let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    let day = today.toLocaleString("fr-FR", options);
return day;
}

