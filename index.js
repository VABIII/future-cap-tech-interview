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

    /** Takes string and separates company name from the number of shares **/
    const company = str.replace(/[^A-Z]/g, '');

    /** Takes string and separates number of shares from the company name and converts it an integer **/
    const shares = parseInt(str.replace(/\D/g, ''));

    /** Returns an object containing the separated name and number of shares held as an integer **/
    return {company, shares};
}


const calculateValue = portfolio => {
    /** Separates the string into an array where each element is added everytime a comma is encountered **/
    const stocks = portfolio.split(',');
    /** This empty array will hold the elements of the stocks array once the names and shares are separated **/
    let newArr = [];
    /** This variable will be used to keep track of the total portfolio value **/
    let totalValue = 0;

    /**
        We need to loop through our initial string we split into an array and convert string data into a form
        more conducive to the actions need to perform
      **/
    for(let stock of stocks) {
        /**
            Each time around our loop, we will pass the current element to the separateString() func then
            push the results the newArr array we created
          **/
        newArr.push(separateString(stock));
    }

    /** Now, loop through the newArr array, and the array holding all the data for each company **/

    for (let i = 0; i < newArr.length; i++) {
        /** Created a variable that represents the current element of newArr in our outer loop.  **/
        let currentCompany = newArr[i];
        for (let j = 0; j < DATA.length; j++) {
            /** Created a variable that represents the current element of DATA in our inner loop **/
            let currentData = DATA[j];
            /**
                Here we check that the company name matches for our current elements. If they do, then we retrieve
                current price of each share from the DATA set, and then multiply that by the number of shares.
                This number is then added to whatever the existing value of the totalValue variable.
            **/
            if(currentCompany.company === currentData.ticker) totalValue += (currentCompany.shares * currentData.close);
        }
    }
    /** Returns the sum total of all the shares held in a portfolio **/
    return totalValue;
}

/** Part 2 **/

const TEST_CASE_3 = "7,1,5,3,6,4"
const TEST_CASE_4 = "7,6,4,3,1"

const maximizeProfits = prices => {
    /** Separates the string into an array where each element is added everytime a comma is encountered **/
    const priceArray = prices.split(',');
    /** Variable to keep track of the maximum profit **/
    let maxProfit = 0;
    /** Variable to keep track of the best day to buy **/
    let buyDate = '';
    /** Variable to keep track of the best day to sell **/
    let sellDate = '';


    /** Here we have nested loops checking the difference in share prices from day to day **/
    for (let i = 0; i < priceArray.length; i++) {
        /** Variable to keep track of the current day's share price **/
        let currentDay = priceArray[i]
        /** Variable to keep track of current profit **/
        let profit = 0
        for (let j = i + 1; j < priceArray.length; j++) {
            /** Variable to keep track of a future day's share price **/
            let futureDay = priceArray[j];
            /** If the price of a share today is less than the price of a share in the future,
                that profit is calculated **/
            if(currentDay < futureDay) profit = futureDay - currentDay;
            /** Check to see if current profit is greater than the highest profit encountered so far **/
            if(profit > maxProfit) {
                /** If condition is met, we set the best days to buy and sell as the index positions of the
                    outer loop and inner loops respectively as well as the maximum profit encountered so far **/
                maxProfit = profit;
                buyDate = i + 1;
                sellDate = j + 1;
            }

        }
    }

    /** If the maxProfit is zero, we return instructions to do nothing, otherwise we return which day to buy
        which day to sell to realize the maximum profit possible **/

    return maxProfit <= 0 ?
        `Do nothing. Maximum profit would be zero.` :
        `To achieve a maximum profit of ${maxProfit}, then you should buy on day ${buyDate} and sell on ${sellDate}`
}









































