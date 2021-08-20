const cookingAStep = {
    'BoilNoodle' : 10
}
const cookingBStep = {
    'BoilBrocolli' : 1,
    'fryGarlicOnion' : 2,
    'fryBaconHam' : 2,
    'frySauceVegetables' : 3,
}

const cookingCStep = {
    'fry all ingredient' : 3,
}

const cookingAStepArray = Object.keys(cookingAStep);
const cookingBStepArray = Object.keys(cookingBStep);
const cookingCStepArray = Object.keys(cookingCStep);

function randomFail() {
    if (Math.random() < 0.4) throw "Failed...!!!!ㅠㅠㅠ";
}

let AISFINISHED = false;
let BISFINISHED = false;

const A = () => {
    console.log('면 볶기');
    new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                randomFail();
                resolve('success');
            } catch (error) {
                console.log(error);
                reject('fail');
            }
        }, (10000));
    })
    .then((result) => {
        AISFINISHED = true;
        C();
    })
    .catch((error) => {
        A();
    })
}

const B1 = () => {
    console.log('브로콜리 삶기')
    new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                randomFail();
                resolve('success');
            } catch (error) {
                console.log(error);
                reject('fail');
            }
        }, (1000));
    })
    .then((result) => {
        B2();
    })
    .catch((error) => {
        B1();
    })
}

const B2 = () => {
    console.log('마늘양파 볶기');
    new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                randomFail();
                resolve('success');
            } catch (error) {
                console.log(error);
                reject('fail');
            }
        }, (2000));
    })
    .then((result) => {
        B3();
    })
    .catch((error) => {
        B2();
    })
}

const B3 = () => {
    console.log('햄베이컨 굽기');
    new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                randomFail();
                resolve('success');
            } catch (error) {
                console.log(error);
                reject('fail');
            }
        }, (2000));
    })
    .then((result) => {
        B4();
    })
    .catch((error) => {
        B3();
    })
}

const B4 = () => {
    console.log('소스랑 야채 볶기');
    new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                randomFail();
                resolve('success');
            } catch (error) {
                console.log(error);
                reject('fail');
            }
        }, (3000));
    })
    .then((result) => {
        BISFINISHED = true;
        C();
    })
    .catch((error) => {
        B4();
    })
}

const C = () => {
    if (AISFINISHED && BISFINISHED) {
        console.log('전부 다 볶기');
        new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    randomFail();
                    resolve('success');
                } catch (error) {
                    console.log(error);
                    reject('fail');
                }
            }, (3000));
        })
        .catch((error) => {
            C();
        })
    } else return ;
}

A();
B1();

