const cookingStep = {
    '반죽 만들기' : 3,
    '1차 발효' : 5,
    '성형 하기' : 4.2,
    '2차 발효' : 2,
    '튀기기' : 5,
}
const cookingStepArray = Object.keys(cookingStep);
let i = 0;

function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

function cook() {
    console.log(cookingStepArray[i]); // 현재 단계 출력
    cookIngredient();
}

const cookIngredient = () => {
    setTimeout(() => 
    {
        try {
            i++;
            randomFail();
        } catch (error) {
            console.log(error);
            i--;
        }
        if (i < 5) {
            cook();
        }
    }, cookingStep[cookingStepArray[i]] * 100)
}

cook(0);