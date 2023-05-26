console.log("exo-7");

let translate = {
    "car": "voiture",
    "house": "maison",
    "game": "jeux",
    "videogame": "jeux-video",
    "show": "spectacle"
}

for (let i=0;i<jsonDatas.length;i++){
    jsonDatas[i].translateType = translate[jsonDatas[i].type];
    console.log(jsonDatas[i]);
}