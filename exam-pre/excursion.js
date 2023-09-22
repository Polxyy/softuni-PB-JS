function excursion(input){
    let peopleInGroup = Number(input[0]);
    let amountNights = Number(input[1]);
    let transportCard = Number(input[2]);
    let museumTickets = Number(input[3]);
    //noshtuvka == 20lv karta za transport == 1.6 bilet muzey = 6lv; + 25% kym krayna suma
    let midAmount = (amountNights * 20) + (transportCard * 1.6) + (museumTickets * 6);
    let final = (midAmount * 1.25) * peopleInGroup;
    console.log(final.toFixed(2));
}

excursion(["20","14","30",])