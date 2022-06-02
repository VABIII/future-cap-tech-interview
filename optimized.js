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
    let memo = {};
    let totalValue = 0;

    for(let stock of stocks) {
        let stockObj = separateString(stock);
        memo[stockObj.company] = stockObj.shares;
    }

    for(let i = 0; i < DATA.length; i++) {
        let current = DATA[i]
        if(current.ticker in memo) {
            totalValue += (memo[current.ticker] * current.close)
        }

    }
    return totalValue
}

calculateValue(TEST_CASE_2)

/** Part 2 **/

const TEST_CASE_3 = [7,1,5,3,6,4]
const TEST_CASE_4 = [7,6,4,3,1]

const maximizeProfits = prices => {
    let buyDate = 0;
    let sellDate = 0;
    let minPrice = prices[0];
    let maxProfit = prices[1] - prices[0];


    for(let i = 1; i < prices.length; i++){
        if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
            sellDate = i + 1;

        }
        if(prices[i] < minPrice) {
            minPrice = prices[i];
            buyDate = i + 1;
        }
    }
    return maxProfit < 0 ? 0 : maxProfit

}

console.log(maximizeProfits(TEST_CASE_3))















































