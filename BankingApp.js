// Pre-requisite for Banking App.js
/*
- Cuurent Account Balance 
- options 
- Deposit
- withdrawal amount
- Transfer in Account 
- logout
*/
var CurrentAccountBalance = 1000;
var options = 0;

do {

    console.log("----------Banking Application Page----------- ");
    console.log("1.Deposit ");
    console.log("2.withdraw");
    console.log("3.Transfer");
    console.log("0. Logout ");
    console.log("---------------------------------------------- ");

    options = window.prompt("Enter the options:");
    console.log(options + " is selected");


    switch (options) {
        case "0":           // window.prompt contain strings thats why options value should be double quoted
            option = "0";
            console.log("logout");
            break;
        case "1"://Deposit
            options = "1";
            let AddAmount = Number.parseInt(window.prompt("Enter the Deposit Amount"));  //Number.parseInte --- "Convert a String into integer" 
            window.confirm("Are you sure you want to transfer the Amount ?");
            if (AddAmount > 0) {
                CurrentAccountBalance = CurrentAccountBalance + AddAmount;
                console.log(CurrentAccountBalance + "Current Account Balance");
            } else {
                alert("Invalid Amount");
            }
            break;
        case "2":  //Withdrawal Amount 
            option = "2";
            let withdrawalAmount = Number.parseInt(window.prompt("Enter the Withdrawal Amount"));
            if (withdrawalAmount > 0) {
                CurrentAccountBalance = CurrentAccountBalance - withdrawalAmount;
                console.log(withdrawalAmount + " is withdrawal");
                console.log(CurrentAccountBalance + "bank Balance");

            } else {
                console.log("Enter the valid amount");
            }
            console.log("withdraw");
            break;
        case "3":   //Transfer Amount
            option = "3";
            let AccountNumber = Number.parseInt(window.prompt("Enter the Account Number "));
            let AmoutTransfer = Number.parseInt(window.prompt("Enter the Amount you want to Transfer"));

            if (AmoutTransfer > 0 && CurrentAccountBalance>=AmoutTransfer) {
                CurrentAccountBalance = CurrentAccountBalance - AmoutTransfer;
                console.log(AmoutTransfer + "is transfered to " + AccountNumber + "successfully");
                console.log(CurrentAccountBalance + "bank balance");

            } else {
                console.log("Enter the valid amount");
            }
            break;


        default:
            console.log("Invalid option");
    }
} while (options != 0);



