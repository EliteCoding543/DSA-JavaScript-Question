function mySelfInterval(cb, delay) {
    let id;
    function repat() {
        cb();
        id = setTimeout(repat, delay);
    }

    id = setTimeout(repat, delay);

    return () => clearInterval(id);
}

const stop = mySelfInterval(() => {
    console.log("Hello");
}, 1000);

setTimeout(() => {
    stop();
}, 5000);

