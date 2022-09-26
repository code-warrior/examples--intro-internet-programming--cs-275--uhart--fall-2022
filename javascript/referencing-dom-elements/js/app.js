window.onload = () => {
    let h1 = document.getElementsByTagName(`h1`)[0];
    let welcomeMessage = document.getElementById(`welcome-message`);
    let allLIs = document.getElementsByTagName(`li`);
    let copyrightContainer = document.querySelector(`html > head + body > footer  p`);
    let copyright = document.querySelectorAll(`html > head + body > footer  p`);
    copyright[1].style.color = `blue`;
    copyrightContainer.style.backgroundColor = `pink`;
    console.log(`The amount of list items in this page is ${allLIs.length}`);
    console.log(`The content of the 3rd item in the array ${allLIs[2].textContent}`);

    console.log(`The content of the paragraph element is ${welcomeMessage.textContent}`);
    welcomeMessage.textContent = "blah";
    console.log(h1.textContent);
};
