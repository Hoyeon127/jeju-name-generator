const jejuNames = [
    { name: "가람", meaning: "강, 물" },
    { name: "하르방", meaning: "할아버지, 수호신" },
    { name: "바당", meaning: "바다" },
    { name: "오름", meaning: "작은 산, 언덕" },
    { name: "솔오름", meaning: "소나무 언덕" },
    { name: "우다", meaning: "비, 내리다" },
    { name: "하늬", meaning: "바람" },
    { name: "달리", meaning: "달" },
    { name: "수월봉", meaning: "물, 봉우리" },
    { name: "멩이", meaning: "고양이" },
    { name: "구슬", meaning: "보석, 귀한 것" },
    { name: "모슬포", meaning: "포구, 바다" },
    { name: "도르멍", meaning: "돌멩이" },
    { name: "왕벵이", meaning: "전복" },
    { name: "올레", meaning: "작은 길, 골목" },
    { name: "영등", meaning: "바람, 신" },
    { name: "한라", meaning: "산, 최고" },
    { name: "노꼬메", meaning: "오름, 산" },
    { name: "누리", meaning: "세상" }
];

document.getElementById('generate-btn').addEventListener('click', function() {
    const userName = document.getElementById('name-input').value.trim();
    const userMeaning = document.getElementById('meaning-input').value.trim();

    if (!userName || !userMeaning) {
        document.getElementById('result').textContent = "이름과 뜻을 모두 입력해 주세요!";
        return;
    }

    const matches = jejuNames.filter(item => item.meaning.includes(userMeaning));

    if (matches.length > 0) {
        const bestMatch = matches[0];  // 가장 잘 맞는 것 1개만 보여줌
        document.getElementById('result').textContent =
            `${userName}님께 추천하는 제주어 이름: ${bestMatch.name} (${bestMatch.meaning})`;
    } else {
        const randomIndex = Math.floor(Math.random() * jejuNames.length);
        const randomName = jejuNames[randomIndex];
        document.getElementById('result').textContent =
            `입력한 뜻과 딱 맞는 이름은 없지만, ${userName}님께 이런 이름은 어때요? 👉 ${randomName.name} (${randomName.meaning})`;
    }
});
