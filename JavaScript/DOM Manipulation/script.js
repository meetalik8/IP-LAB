// console.log("hello!");
function changeHeading() {
  document.getElementById("heading").innerHTML = "I can do DOM!";
}

function getShrinked() {
    const heading = document.getElementById("shrinkage");
    heading.style.fontSize =".7em";
    heading.style.backgroundColor = "#1e1e1e";
    heading.style.color = "white";
}

let i = 1;
function countMe(){
    const node = document.createElement("li");
    const textnode = document.createTextNode(`Count ${i}`);
    node.appendChild(textnode);
    document.getElementById("addMe").appendChild(node);
    i++;
}

function removeMe(){
    const node = document.getElementById("addMe");
    if(node.hasChildNodes()){
        node.removeChild(node.children[0]);
    }
}
