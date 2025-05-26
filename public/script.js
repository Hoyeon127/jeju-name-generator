const jejuNames = [
    { name: "가람", meaning: "강, 물" },
    { name: "하르방", meaning: "할아버지, 수호신" },
    { name: "바당", meaning: "바다" },
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
    { name: "누리", meaning: "세상" },
    { name: "하영", meaning: "많이" },
    { name: "무사", meaning: "왜" },
    { name: "빙애기", meaning: "병아리" },
    { name: "낭", meaning: "나무" },
    { name: "송애기", meaning: "송아지" },
    { name: "도새기", meaning: "돼지" },
    { name: "심", meaning: "힘" },
    { name: "가개비", meaning: "개구리" },
    { name: "구살", meaning: "성게" },
    { name: "감저", meaning: "고구마" },
    { name: "우영팟", meaning: "텃밭" },
    { name: "노리", meaning: "노루" },
    { name: "독세기", meaning: "달걀" },
    { name: "태역", meaning: "잔디" },
    { name: "용심", meaning: "화" },
    { name: "마농", meaning: "마늘" },
    { name: "벳", meaning: "햇볕" },
    { name: "부제", meaning: "부자" },
    { name: "멜", meaning: "멸치" },
    { name: "똥소레기", meaning: "독수리" },
    { name: "강생이", meaning: "강아지" },
    { name: "몽생이", meaning: "망아지" },
    { name: "생이", meaning: "새" },
    { name: "꿩마농", meaning: "산달래" },
    { name: "송키", meaning: "채소" },
    { name: "지실", meaning: "감자" },
    { name: "어욱", meaning: "억새" },
    { name: "모물", meaning: "메밀" },
    { name: "굴묵낭", meaning: "느티나무" },
    { name: "가라지", meaning: "강아지풀" },
    { name: "재게", meaning: "빨리" },
    { name: "애순", meaning: "문학소녀" },
    { name: "관식", meaning: "사랑꾼" },
    { name: "상길", meaning: "학씨" },
    { name: "순덕", meaning: "순하고 덕이 있다" },
    { name: "복순", meaning: "복이 많은 순한 사람" },
    { name: "영자", meaning: "영롱하다" },
    { name: "옥자", meaning: "옥처럼 귀하다" },
    { name: "상돌", meaning: "높고 단단한 사람" },
    { name: "만수", meaning: "가득하다" },
    { name: "경돌", meaning: "밝은 아이" },
    { name: "순애", meaning: "순수한 사랑" },
    { name: "말자", meaning: "말처럼 강인하고 부지런한 사람" },
    { name: "달분", meaning: "달빛을 닮은 아이" },
    { name: "애득", meaning: "귀엽고 덕스럽다" },
    { name: "금복", meaning: "황금같은 복을 지닌 아이" },
       
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
