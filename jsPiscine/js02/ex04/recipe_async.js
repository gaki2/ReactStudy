const axios = require('axios');
const cookingStep = {
    '반죽 만들기' : 3,
    '1차 발효' : 5,
    '성형 하기' : 4.2,
    '2차 발효' : 2,
    '튀기기' : 5,
}
const cookingStepArray = Object.keys(cookingStep);

function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

async function cookIngredient(step) {
    setTimeout(() => {
        console.log(`${step} 시작`)
        randomFail();
    }, cookingStep[step] * 1000)
}

async function cook () {
    try {
        await cookIngredient('반죽 만들기');
        await cookIngredient('1차 발효');
        await cookIngredient('성형 하기');
        await cookIngredient('2차 발효');
        await cookIngredient('튀기기');
    } catch (error) {
        console.log(error);
    }
}

cook();

