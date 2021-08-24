console.log("page loaded...");

var originalName = document.querySelector("#originalName");
console.log(originalName.innerText);


function changeName(){
    originalName.innerText = "Kim Possible";
    return originalName.innerText;
    console.log(originalName.innerText);
}

function hide() {
    element.remove();
}

