const A = ['면 삶기'];
const A_time = [10];
const A_idx = 0;

const B = ['브로콜리 대치기', '마늘과 양파 볶기', '베이컨과 햄 볶기', 
'소스, 남은 야채 넣고 다 볶기'];
const B_time = [1,2,2,3];
const B_idx = 0;

const C = ['면까지 넣고 다 볶기'];
const C_time = [3];
const C_idx = 0;

function randomFail() 
{
    if (Math.random() < 0.2) return true; 
    else return false;
};

function p1 () { 
    return new Promise((resolve, reject) => {
    // if (A_idx === A.size()) resolve("모든 단계 완료");
        if (randomFail()) {
            resolve("제작 실패");
        } else {
            reject("제작 성공");
        }
    });
}

p1.then(() => {
    
}).catch(() => {
    i++;
})

function main() {
    while (A_idx < 1) {
        (function() {
            console.log(A[A_idx]);
            setTimeout(function() {
                p1().then(() => {console.log(`${A[A_idx]} 제작에 실패하였습니다.`)}).catch(() => A_idx++);
            }, A_time[A_idx])
        })
    }
    while (B_idx < 5) {
        (function() {
            console.log(B[B_idx]);
            setTimeout(function() {
                p2().then(() => {console.log(`${B[B_idx]} 제작에 실패하였습니다.`)}).catch(() => B_idx++);)
            }, B_time[B_idx])
        }
    }
}

let p2 = new Promise((resolve, reject) => {
    if (B_idx === B.size()) resolve("모든 단계 완료");
    setTimeout(() => {
        if (randomFail()) {
            resolve("제작 실패");
        } else {
            reject("제작 성공");
        }
    })
}, B_time[B_idx]);

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (randomFail()) {
            resolve("제작 실패");
        } else {
            reject("제작 성공");
        }
    })
}, C_time[C_idx]);


