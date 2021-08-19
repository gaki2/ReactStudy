let count = 0;

function setTimer (callback, interval) {
    const intervalObject = setInterval(() => {
        if (callback(count)) {
            count++;
        } else {
            clearInterval(intervalObject);
        }
    }, interval)
}

function printNum(count) {
	console.log(count);
	return count < 3;
}

setTimer(printNum, 100);