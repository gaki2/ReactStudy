const cookingStep = {
    '반죽 만들기' : 3,
    '1차 발효' : 5,
    '성형 하기' : 4.2,
    '2차 발효' : 2,
    '튀기기' : 5,
}
const cookingStepArray = Object.keys(cookingStep);


function randomFail() {
    if (Math.random() < 0.4) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}


const p = () => {
    return new Promise((resolve, reject) => {
    randomFail(); // 실패시 아래 코드는 실행하지않고 catch 로 넘어감.
})}

const cookIngredient = () => {
    console.log(cookingStepArray[i]);
    setTimeout(() => {
        i++;
        p().catch((error) => {
            i--;
            console.log(error);
        })
        if (i < 5) {
            cookIngredient();
        }
    }, cookingStep[cookingStepArray[i]] * 100)
}
let i = 0;

cookIngredient();
