function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function abc() {
    const result = await getData();
    console.log(result);
}

abc();