const names = [
    "가람", "바다", "하르방", "솔오름", "우다", "하늬", "구슬", "오름", "모슬포", "제주하늘",
    "달리", "하이", "바람꽃", "도르멍", "순이", "왕벵이", "구좌", "수월봉", "멩이", "올레"
];

document.getElementById('generate-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    document.getElementById('result').textContent = randomName;
});
