const textAreaValue = document.getElementById("textArea");
const totalCounterValue = document.getElementById("total-counter");
const remainingCounterValue = document.getElementById("remaining-counter");

textAreaValue.addEventListener('keyup', () => {
    updateCounter();
});

updateCounter();

function updateCounter(){
    totalCounterValue.innerText = textAreaValue.value.length;
    remainingCounterValue.innerText =
    textAreaValue.getAttribute("maxLength") - textAreaValue.value.length;

}