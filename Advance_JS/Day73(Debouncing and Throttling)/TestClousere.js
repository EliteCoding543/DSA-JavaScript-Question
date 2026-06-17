function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = outer();

increment();
increment();
increment();