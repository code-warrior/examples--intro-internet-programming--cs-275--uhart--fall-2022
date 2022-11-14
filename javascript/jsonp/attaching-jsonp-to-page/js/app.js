function edbob(json) {
    let message = document.getElementById(`msg`);

    message.textContent = json[0].course;
}

window.onload = () => {
    let body = document.querySelector(`body`);
    let script = document.createElement(`script`);

    script.setAttribute(`src`, `json/data.json`);
    body.append(script);
};
