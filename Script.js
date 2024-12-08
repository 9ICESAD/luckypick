let history = [];

function generateRandomNumber() {
    // เล่นเสียงเอฟเฟคที่เกี่ยวกับการสุ่ม
    let sound = document.getElementById("randomSound");
    sound.play();

    let randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNumber').innerHTML = randomNum;

    // เก็บประวัติเลขที่สุ่ม
    history.push(randomNum);

    // แสดงประวัติเลขที่สุ่ม
    updateHistory();
}

function updateHistory() {
    let historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // เคลียร์ประวัติเดิม
    history.forEach(num => {
        let li = document.createElement('li');
        li.textContent = num;
        historyList.appendChild(li);
    });
}

function resetHistory() {
    history = [];
    updateHistory();
}
