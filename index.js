const  DATA = [
    {
        "ticker": "BABA",
        "name": "Alibaba Group Holding Ltd - ADR",
        "close": 140.2
    },
    {
        "ticker": "PLTR",
        "name": "Palantir Technologies Inc",
        "close": 23.2
    },
    {
        "ticker": "FB",
        "name": "Facebook, Inc. Common Stock",
        "close": 323.95
    },
    {
        "ticker": "TSLA",
        "name": "Tesla Inc",
        "close": 781.54
    },
    {
        "ticker": "WISH",
        "name": "ContextLogic Inc",
        "close": 4.87
    }
]

/** Part 1 **/

const TEST_CASE_1 = "FB:12,PLTR:5000"
const TEST_CASE_2 = "BABA:1,TSLA:5,WISH:1200"

const separateString = str => {
    const company = str.replace(/[^A-Z]/g, '');
    const shares = parseInt(str.replace(/\D/g, ''));

    return {company, shares};
}


const calculateValue = portfolio => {
    const stocks = portfolio.split(',');
    let newArr = [];
    let totalValue = 0;


    for(let stock of stocks) {
        newArr.push(separateString(stock));
    }

    for (let i = 0; i < newArr.length; i++) {
        let currentCompany = newArr[i];
        for (let j = 0; j < DATA.length; j++) {
            let currentData = DATA[j];
            if(currentCompany.company === currentData.ticker) totalValue += (currentCompany.shares * currentData.close);
        }
    }

    return totalValue;
}

/** Part 2 **/

const TEST_CASE_3 = "7,1,5,3,6,4"
const TEST_CASE_4 = "7,6,4,3,1"

const maximizeProfits = prices => {
    const priceArray = prices.split(',')
    let maxProfit = 0

    for (let i = 0; i < priceArray.length; i++) {
        let currentDay = priceArray[i]
        let profit = 0
        for (let j = i + 1; j < priceArray.length; j++) {
            let nextDay = priceArray[j];
            if(currentDay < nextDay) profit = nextDay - currentDay
            if(profit > maxProfit) maxProfit = profit

        }
    }

    return maxProfit;
}











































