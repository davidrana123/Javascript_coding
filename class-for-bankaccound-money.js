class BankAccount{
    constructor(account_number, balance){
        this.account_number = account_number;
        this.balance = balance;
    }

    deposit(depositmoney){
        return 'your total blance' + ' ' + this.balance + depositmoney;
    }

    withdra(withdrawmoney){
        if(withdrawmoney > this.balance){
            return 'you have not blance you have only' + ' ' + this.balance;
        }else{
            this.balance -= withdrawmoney;
            return 'now you total blance' + ' ' + this.balance;
        }
    }
}

const bankac = new BankAccount("1234", 10000)
console.log(bankac.deposit(10))
console.log(bankac.withdra(10))