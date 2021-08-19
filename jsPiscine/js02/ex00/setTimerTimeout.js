

function setTimer(callback, interval) {
    let miniSet = (count) => {
        if (callback(count)) {
            count++;
            setTimeout(() => {
                miniSet(count);
            }, interval)
        }
    }
    miniSet(0);
}

function printNum(count) {
	console.log(count);
	return count < 3;
}

setTimer(printNum, 100);
