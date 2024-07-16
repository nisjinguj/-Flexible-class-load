// 페이지가 로드될 때 로컬 스토리지에서 값을 읽어옵니다
window.onload = function() {
    x = localStorage.getItem('x') ? parseInt(localStorage.getItem('x')) : 0;
    y = localStorage.getItem('y') ? parseInt(localStorage.getItem('y')) : 0;
    z = localStorage.getItem('z') ? parseInt(localStorage.getItem('z')) : 0;
    console.log(`x: ${x}, y: ${y}, z: ${z}`);
}

var x = 0, y = 0, z = 0;

function displayAgeResult_age(ageGroup) {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    
    const title = document.createElement('h1');
    title.textContent = `당신의 근육 나이는 ${ageGroup} 입니다`;
    resultContainer.appendChild(title);
    
    const description1 = document.createElement('h2');
    description1.textContent = '당신의 실제 나이보다 신체 나이가 많으면 꾸준한 근력 운동으로 이를 해결할 필요가 있습니다';
    resultContainer.appendChild(description1);

    const description2 = document.createElement('h2');
    description2.textContent = '대표적으로 바닥에 누워 무릎을 살짝 든 자세에서 등을 올리거나 무릎을 배꼽 쪽으로 당기는 동작은 복근 및 척추 주변 근육 강화에 좋습니다';
    resultContainer.appendChild(description2);
    
    const nextButton = document.createElement('button');
    nextButton.textContent = '다음으로';
    nextButton.classList.add('next-button');
    nextButton.onclick = () => location.href = './third.html';
    resultContainer.appendChild(nextButton);

    document.body.innerHTML = '';
    document.body.appendChild(resultContainer);
    document.body.classList.add('result-background');
}

function age1() {
    displayAgeResult_age('20대');
    x = 20;
    localStorage.setItem('x', x);
    console.log(`x is set to ${x}`);
}

function age2() {
    displayAgeResult_age('30대');
    x = 30;
    localStorage.setItem('x', x);
    console.log(`x is set to ${x}`);
}

function age3() {
    displayAgeResult_age('40대');
    x = 40;
    localStorage.setItem('x', x);
    console.log(`x is set to ${x}`);
}

function age4() {
    displayAgeResult_age('50대');
    x = 50;
    localStorage.setItem('x', x);
    console.log(`x is set to ${x}`);
}

function age5() {
    displayAgeResult_age('60대');
    x = 60;
    localStorage.setItem('x', x);
    console.log(`x is set to ${x}`);
}

function displayQuicknessResult(ageGroup) {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    
    const title = document.createElement('h1');
    title.textContent = `당신의 순발력은 ${ageGroup} 수준 입니다`;
    resultContainer.appendChild(title);
    
    const description1 = document.createElement('h2');
    description1.textContent = '당신의 실제 나이보다 순발력 검사 결과에서 나온 결과의 나이가 더 많다면 피부탄력을 향상시킬 필요가 있습니다';
    resultContainer.appendChild(description1);

    const description2 = document.createElement('h2');
    description2.textContent = '대표적으로 단거리 달리기 줄넘기 맨몸 스트래칭이 있으며 이를 꾸준히 이행하면 순발력을 향상시킬 수 있습니다.';
    resultContainer.appendChild(description2);
    
    const nextButton = document.createElement('button');
    nextButton.textContent = '다음으로';
    nextButton.classList.add('next-button');
    nextButton.onclick = () => location.href = './fourth.html';
    resultContainer.appendChild(nextButton);

    document.body.innerHTML = '';
    document.body.appendChild(resultContainer);
    document.body.classList.add('result-background');
}

function quickness1() {
    displayQuicknessResult('20~30대');
    y = 25;
    localStorage.setItem('y', y);
    console.log(`y is set to ${y}`);
}

function quickness2() {
    displayQuicknessResult('40~50대');
    y = 45;
    localStorage.setItem('y', y);
    console.log(`y is set to ${y}`);
}

function quickness3() {
    displayQuicknessResult('60대');
    y = 60;
    localStorage.setItem('y', y);
    console.log(`y is set to ${y}`);
}

function fourthJs(ageGroup) {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    
    const title = document.createElement('h1');
    title.textContent = `당신의 피부은 ${ageGroup} 수준 입니다`;
    resultContainer.appendChild(title);
    
    const description1 = document.createElement('h2');
    description1.textContent = '당신의 실제 나이보다 피부탄력 검사 결과에서 나온 결과의 나이가 더 많다면 피부 탄력을 늘리기 위해 노력할 필요가 있습니다';
    resultContainer.appendChild(description1);

    const description2 = document.createElement('h2');
    description2.textContent = '이를 위해 술과 담배를 끊고 피부가 건조해지지 않게 피부 보습관리를 해야하며 콜라겐이 포함된 식품을 섭취하십시요';
    resultContainer.appendChild(description2);
    
    const nextButton = document.createElement('button');
    nextButton.textContent = '다음으로';
    nextButton.classList.add('next-button');
    nextButton.onclick = () => location.href = './last.html';
    resultContainer.appendChild(nextButton);

    document.body.innerHTML = '';
    document.body.appendChild(resultContainer);
    document.body.classList.add('result-background');
}

function a1(){
    fourthJs("20~30대");
    z = 25;
    localStorage.setItem('z', z);
    console.log(`z is set to ${z}`);
}

function a2(){
    fourthJs("40~50대");
    z = 45;
    localStorage.setItem('z', z);
    console.log(`z is set to ${z}`);
}

function a3(){
    fourthJs("60대 이상");
    z = 60;
    localStorage.setItem('z', z);
    console.log(`z is set to ${z}`);
}

function last(){
    const sum = (x + y + z) / 3;
    console.log(`sum is calculated as ${sum}`);
    document.getElementById('result').style.display = 'none';
    const resultDiv = document.getElementById('div');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `<p>당신의 신체나이의 평균: ${sum}세</p>`;
}

function share(){
    alert("file:///C:/FlexibleClassLoad/main/last.html");
}