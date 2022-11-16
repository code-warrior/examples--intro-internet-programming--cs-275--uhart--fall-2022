function edbob(json) {
    let message = document.getElementById(`msg`);
    let randomDiv = document.getElementById(`random`);
    let content = ``;
    // message.textContent = json[0].course;
    // randomDiv.textContent = `<i><b>${json[0].description}</b></i>`;

    console.log(`There are ${json.length} items in the JSON file`);
    for(let i=0; i<json.length; i++) {
        content += `<p>${json[i].course}</p>`;
        console.log(json[i].thing.one);
    }

    randomDiv.innerHTML = content;
}

window.onload = () => {
    let body = document.querySelector(`body`);
    let script = document.createElement(`script`);

    script.setAttribute(`src`, `json/data.json`);
    body.append(script);
};
