{
    //  Getter and setter

    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // getBalance(){
        //     return this._balance;
        // }

        //  getter
        get balance(){
            return this._balance;
        }

        // addDeposit(amount: number){
        //     this._balance = this._balance + amount;
        // }

        //  setter
        set deposit(amount: number){
            this._balance = this._balance + amount;
        }

    }

    const poorAccount = new BankAccount(123, 'mr. Poor', 50);

    poorAccount.deposit = 20;
    const myBalance = poorAccount.balance;
    console.log(myBalance);



}