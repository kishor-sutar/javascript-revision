// 1. The Promise-returning function (The "Worker")
function fakeAPI(name, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Finished: ${name}`);
            resolve(name); 
        }, time);
    });
}

async function runTest() {
    // --- SEQUENTIAL EXECUTION ---
    console.time("Sequential Total");
    console.log("\n--- Starting Sequential ---");
    await fakeAPI("API 1", 1000);
    await fakeAPI("API 2", 1000);
    await fakeAPI("API 3", 1000);
    await fakeAPI("API 1", 1000);
    await fakeAPI("API 2", 1000);
    await fakeAPI("API 3", 1000);
    await fakeAPI("API 1", 1000);
    await fakeAPI("API 2", 1000);
    await fakeAPI("API 3", 1000);
    await fakeAPI("API 1", 1000);
    await fakeAPI("API 2", 1000);
    await fakeAPI("API 3", 1000);
    await fakeAPI("API 1", 1000);
    await fakeAPI("API 2", 1000);
    await fakeAPI("API 3", 1000);
    await fakeAPI("API 1", 1000);
    await fakeAPI("API 2", 1000);
    await fakeAPI("API 3", 1000);
    console.timeEnd("Sequential Total"); // Should be ~3 seconds

    // --- PARALLEL EXECUTION ---
    console.time("Parallel Total");
    console.log("\n--- Starting Parallel ---");
    await Promise.all([
        fakeAPI("API A", 1000),
        fakeAPI("API B", 1000),
            fakeAPI("API A", 1000),
        fakeAPI("API B", 1000),
            fakeAPI("API A", 1000),
        fakeAPI("API B", 1000),
            fakeAPI("API A", 1000),
        fakeAPI("API B", 1000),
            fakeAPI("API A", 1000),
        fakeAPI("API B", 1000),
            fakeAPI("API A", 1000),
        fakeAPI("API B", 1000),
            fakeAPI("API A", 1000),
        fakeAPI("API B", 1000),

            fakeAPI("API A", 1000),
        fakeAPI("API B", 1000),    fakeAPI("API A", 1000),
        fakeAPI("API B", 1000),
        fakeAPI("API C", 1000)
        

    ]);
    console.timeEnd("Parallel Total"); // Should be ~1 second
}

runTest();