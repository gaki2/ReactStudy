const lists = ['반죽 만들기', '1차 발효', 
'성형 하기', '2차 발효', '튀기기'];

const intervals = [3,5, 4.2, 2, 5];


function randomFail() 
{
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
};

function printErrorMsg() {
    try {
        randomFail();
    }
    catch(e) {
        console.log(e);
        i--;
    }
}

let i = 0;

function recipeCallback() {
    console.log(lists[i]);
    setTimeout(function () { 
            printErrorMsg();
            i++;
            if (i < lists.length) {
                recipeCallback();
            }
        }, intervals[i]*100)
    }

recipeCallback();


