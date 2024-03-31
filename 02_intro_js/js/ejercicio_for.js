
let elemPar = document.querySelector("#parrafo");

elemPar.innerText = "";

for (let i = 0; i <= 100; i++) {
    elemPar.innerText += `${i}\n`;
}