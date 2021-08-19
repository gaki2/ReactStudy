const lists = ['반죽 만들기', '1차 발효', 
'성형 하기', '2차 발효', '튀기기'];
const intervals = [3,5,4.2,2,5];

let i = 0;



function randomFail() 
{
    if (Math.random() < 0.2) {
        return true;
    } else {
        return false;
    }
};

function console_log_job() {

    let p = new Promise((resolve, reject) => {
        if (randomFail()) {
            resolve("제작 실패..!(월급이 삭감되었다 ㅜㅜ)");
        }
    });

    p
    .then((message) => {
        console.log(message)
        i--;
    })
}

function recipe_callback() {
    console.log(lists[i]);
    setTimeout(function () {
        console_log_job();
        i++;
        if (i < lists.length) {
            recipe_callback();
        }
    }, intervals[i]*1000);
}

recipe_callback();