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
    let div = document.querySelector(".articleList");
    div.innerHTML += `
        <h1>${ jsonDatas[i].name }</h1>
        <p>${
            
        }</p>
    `
}

