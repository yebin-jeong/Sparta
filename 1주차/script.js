document.getElementById('generateButton').addEventListener('click', function() {
    let numbers = generateLottoNumbers();  // 버튼이 눌리면 이 함수가 실행
    document.getElementById('numbers').textContent = numbers.join(', ');
});


function generateLottoNumbers() {
    const numarr = [];
    while (numarr.length < 6){
        const randomNum = Math.floor(Math.random()*45) + 1;

        if(!numarr.includes(randomNum)){
            numarr.push(randomNum);
        }
    }
    return numarr;
}