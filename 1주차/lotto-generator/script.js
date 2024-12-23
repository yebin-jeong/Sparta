document.getElementById('generateButton').addEventListener('click', function() {
    let numbers = generateLottoNumbers();  // 버튼이 눌리면 이 함수가 실행
    document.getElementById('numbers').textContent = numbers.join(', ');
});


// 로또 번호를 생성하는 함수
function generateLottoNumbers() {
    const numarr = [];
    
    // 배열에 6개의 고유 번호가 들어갈 때까지 반복
    while (numarr.length < 6) {
        // 1부터 45까지의 랜덤 번호 생성
        const randomNum = Math.floor(Math.random() * 45) + 1;

        // 생성된 랜덤 번호가 배열에 이미 존재하지 않으면 추가
        if (!numarr.includes(randomNum)) {
            numarr.push(randomNum);
        }
    }
    
    return numarr;
}
