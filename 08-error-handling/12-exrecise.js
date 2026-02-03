function windraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Insufficient funds");
    }
    else {
        return balance;
    }
}


try {
    console.log(windraw(8, 6));
} catch (error) {
    console.log(error.message);

}





console.log("---------------------------------------------------------------");

function wifhDrowAsync(balance, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > balance) {
                reject("Insufficient balance");
            }
            else {
                resolve(balance - amount);
            }

        },5000)

    });
}


async function handleRisk() {
    try {
        let result = await wifhDrowAsync(1001, 1000);
        console.log(result);

    } catch (error) {
        console.log(error);

    }
}

handleRisk();