const endDate = '17 January 2023 03:06 PM'

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if(diff < 0) return;
    //convert into days
    inputs[0].value = Math.floor(diff/60/60/24);
    inputs[1].value = Math.floor(diff/60/60)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff)%60;
}


setInterval( () => {
    clock()
}, 1000)