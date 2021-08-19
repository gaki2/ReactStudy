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

const retryBCourse = (step) => {
        return new Promise((resolve) => {
            console.log(`${step}`)
            setTimeout(() => {
                try {
                    randomFail();
                    resolve(`${step} 성공`);
                } catch (error) {
                    console.log(`${step} ${error}`);
                    retryBCourse(step);
                }
            }, cookingBStep[step] * 100)
        })
}

const retryACourse = (step) => {
        return new Promise((resolve) => {
            console.log(`${step}`)
            setTimeout(() => {
                try {
                    randomFail();
                    console.log(`${step} 성공`);
                    console.log('A ALL FINISHED')
                    resolve(true);
                } catch (error) {
                    console.log(`${step} ${error}`);
                    retryACourse(step);
                }
            }, cookingAStep[step] * 100)
        })
}

const retryCCourse = (step) => {
        return new Promise((resolve) => {
            console.log(`${step}`)
            setTimeout(() => {
                try {
                    randomFail();
                    console.log(`${step} 성공`);
                    resolve('Bon Appetit ~');
                } catch (error) {
                    console.log(`${step} ${error}`);
                    retryCCourse(step);
                }
            }, cookingCStep[step] * 100)
        })
    }

const cookIngredients = () => {
    return new Promise((resolve) => {
        let i = -1;

        retryBCourse(cookingBStepArray[++i])
        .then((result) => {
            console.log(result);
            return retryBCourse(cookingBStepArray[++i])
        })
        .then((result) => {
            console.log(result);
            return retryBCourse(cookingBStepArray[++i])
        })
        .then((result) => {
            console.log(result);
            return retryBCourse(cookingBStepArray[++i])
        })
        .then((result) => {
            console.log(result);
            console.log('B ALL FINISHED');
            resolve(true);
        })
    })
}

const cook = () => {
    Promise.all([cookIngredients(), retryACourse(cookingAStepArray[0])])
    .then((result) => {
        retryCCourse(cookingCStepArray[0])
        .then((result) => {
            console.log(result);
        })
    })
};

cook();