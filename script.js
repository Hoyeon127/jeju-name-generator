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
    { name: "멩이", meaning: "고양이" }
    
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
        const randomIndex = Math.floor(Math.random() * matches.length);
        const resultName = matches[randomIndex].name;
        document.getElementById('result').textContent =
            `${userName}님께 추천하는 제주어 이름: ${resultName} (${matches[randomIndex].meaning})`;
    } else {
        document.getElementById('result').textContent = "입력한 뜻과 관련된 제주어 이름을 찾지 못했어요 😢";
    }
});
