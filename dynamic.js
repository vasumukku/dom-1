let counterValue1 = document.getElementById("counterValue");

let clickCount = localStorage.getItem("clickCount");

if (clickCount === null){
    counterValue1.textContent = 0;

}else{
    counterValue1.textContent = clickCount;
}

function onIncrementCount(){
    let previousValue = counterValue1.textContent;
    let updatedValue = parseInt(previousValue) + 1 ;

    localStorage.setItem("clickCount",updatedValue);
    counterValue1.textContent = updatedValue;
}