const lists = ['반죽 만들기', '1차 발효', 
'성형 하기', '2차 발효', '튀기기'];
const times = [3, 5, 4.2, 2, 5];

let i = 0;

function randomFail() {
    if (Math.random() < 0.2) return (true);
    else return (false);
  }


function p1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomFail()) {
                resolve("제작 실패..ㅠㅠ 월급 삭감");
            } else {
                reject("제작 성공");
            }
        }, times[i] * 1000)
    })
}

async function recipie_callback() {
    console.log(lists[i]);
    try {
        const result = await p1();
        console.log(result);
    } catch {
        i++;
    }
}

function main() {
    while (i < lists.length) {
        recipie_callback();
    }
}

main();