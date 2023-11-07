{
    //  Access modifiers

    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number){
            this._balance = this._balance + amount;
        }
    }

    const poorAccount = new BankAccount(123, 'mr. Poor', 50);
    poorAccount.addDeposit(50);


    class StudentAccount extends BankAccount{
        test(){
            this._balance
        }
    }










}