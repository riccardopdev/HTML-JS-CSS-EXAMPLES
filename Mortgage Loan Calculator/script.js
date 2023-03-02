//Westpac calculator: https://www.westpac.co.nz/personal-loans/personal-loan-calculator/
//Wikipedia formula: https://en.wikipedia.org/wiki/Mortgage_loan

const P = 10000; //Principal, total borrowed money $10000
const r = 0.139/12; //Interest of 13.9% divided 12 months
const n = 18; //18 repayments, one each month = 1 + 1/2 year

const MonthlyRepayments = P * ((r * (Math.pow(1 + r, n)))/((Math.pow(1 + r, n)) - 1));
const TotalLoan = MonthlyRepayments * n;
const TotalInterests = TotalLoan - P;

console.log('Monthly repayments: ', Math.ceil(MonthlyRepayments));
console.log('Total Interests: ', Number(TotalInterests.toFixed()));
console.log('Total Loan: ',Number(TotalLoan.toFixed()));

