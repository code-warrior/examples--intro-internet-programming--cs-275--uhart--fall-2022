window.onload = () => {
    let i = 20;
    let j = 10;
    let name = "mudd";

    console.log(`The value of i is ${i}`);
    console.log("The value of i is " + i );
    console.log('The value of i is ' + i );
    console.log(`My name is ${name}`);
    console.log(`i + j is ${i + j}`);

    i = "sam";

    console.log(`The type of i is ${typeof i}`);
    console.log(`The type of j is ${typeof j}`);
    console.log(`The type of name is ${typeof name}`);
    name = true;
    console.log(`The type of name is ${typeof name}`);
};
