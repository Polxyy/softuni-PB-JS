function calculateRunningResult(input) {
    //let days = Number(input[0]);
    let firstDayKM = Number(input[1]);
    let SUM = firstDayKM;


    while (otherDays !== null) {
        let dayPercent = Number(otherDays);
        SUM = SUM * (1 + dayPercent / 100);
    }

    if (SUM >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(SUM - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - SUM)} more kilometers`);
    }
}
calculateRunningResult(["5", "30", "10"])


