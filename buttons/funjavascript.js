function createFirstButton() {
        const myButton = document.createElement("button");
        myButton.setAttribute('onclick', 'moreButton()');

        const newImage = document.createElement("img");
        newImage.src = "funnycow.jpeg";

        myButton.appendChild(newImage);

        document.getElementById('btn-container').appendChild(myButton);
}

function moreButton() {
        const node = document.querySelector('#btn-container > button');
        const clone = node.cloneNode(true);
        document.getElementById('btn-container').appendChild(clone);
}

window.onload = function() {
        createFirstButton();
}

// function getRandomColor() {
//         const currentColor = document.getElementById("myButton").style.backgroundColor;

//         const colorOptions = ['red', 'blue', 'green', 'orange', 'pink', 'purple'].filter(
//                 item => item !== currentColor
//         );
//         const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        
//         return randomColor;
// }


