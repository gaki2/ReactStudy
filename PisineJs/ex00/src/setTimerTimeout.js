let count = 0;

function setTimer(callback, interval) {
    
    if (printNum(count)) {
        count++;
        setTimeout(() => {
            setTimer(callback, interval);
        }, interval)
    }
}

function printNum(count) {
	console.log(count);
	return count < 3;
}

setTimer(printNum, 100);
