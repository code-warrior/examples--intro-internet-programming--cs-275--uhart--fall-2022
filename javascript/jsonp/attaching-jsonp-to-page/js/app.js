window.onload = () => {
    let body = document.querySelector(`body`);
    let script = document.createElement(`script`);
    script.setAttribute(`src`, `json/data.json`);
    body.append(script);
    // let b = document.createElement(`b`);
    // let content = `This is content`;
    // b.append(content);
    // body.append(b);
};
