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

const TEST_CASE_1 = "FB:12,PLTR:5000"
const TEST_CASE_2 = "BABA:1,TSLA:5,WISH:1200"

const separateString = str => {
    let company = str.replace(/[^A-Z]/g, '')
    let shares = parseInt(str.replace(/\D/g, ''))

    return {company, shares}
}


const calculateValue = portfolio => {
    let stocks = portfolio.split(',');
    let newArr = []
    let totalValue = 0;


    for(let stock of stocks) {
        newArr.push(separateString(stock))
    }

    for (let i = 0; i < newArr.length; i++) {
        let currentCompany = newArr[i]
        for (let j = 0; j < DATA.length; j++) {
            let currentData = DATA[j]
            if(currentCompany.company === currentData.ticker) totalValue += (currentCompany.shares * currentData.close);
        }
    }

    return totalValue;
}


















































