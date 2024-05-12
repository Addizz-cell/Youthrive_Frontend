let cardInfo = {
  accountName: "Iwayemi Fawas",
  number: "0011223344",
  bank: "Access Bank",
  pin: "1122",
  accountBalance: 5000
}

let reciever = [
  { number: "1234567890", name: "Will Smith", bank: "access" },
  { number: "0987654321", name: "Lucas okechukwu", bank: "Uba" }
];
// available balance
// let availableBalance = 50000;


alert("Please click Ok to input your card.");

let inputpin = prompt("Enter your 4 digit pin:");
if (inputpin != cardInfo.pin) {
  alert("Incorrect pin. Please try again.");
  // Terminate execution immediately using a throw statement
  throw new Error("Invalid PIN. Exiting program.");
} else {
  alert("Pin is correct, click on OK to proceed with options")
}




//  Prompt for options
let userInput = prompt("Please choose an option:\n1. Withdraw\n2. Transfer\n3. Balance Check\n4. Transaction Report");

// Handling user input
if (userInput === "1" || userInput === "4") {
    alert("This Service is Unavailable, Please try again later.");
} 
else if (userInput === "2") {
    transferMoney();
} else if (userInput === "3") {
    checkBalance();
} else {
    alert("Invalid option. Please try again.");
}



//Function to validate pin
// function validatePin(inputpin) {
  
//     alert("Incorrect pin. Please try again.");
//     return null; //indicate that the pin is incorrect
  
//  }

// Function to transfer money
function transferMoney() {
  console.log("Starting transferMoney function...");

  let accountNumber = prompt("Enter recipient's account number:");
  console.log("Recipient's account number:", accountNumber);

  let bankName = prompt("Enter recipient's bank name:");
  console.log("Recipient's bank name:", bankName);
  
  // Algorithm to check if account exists
  
let recipientAccount = reciever.find(account => account.number === accountNumber && account.bank === bankName);

  console.log("Recipient account:", recipientAccount);

  if (!recipientAccount) {
      alert("Recipient account not found. Please try again.");
      return;
  }

  let amount = parseFloat(prompt("Enter amount to send:"));
  console.log("Amount to send:", amount);

  if (isNaN(amount) || amount <= 0) {
      alert("Invalid amount. Please enter a valid number.");
      return;
  }

  if (amount > cardInfo.accountBalance) {
      alert("Insufficient balance.");
      return;
  }

  if (confirm(`Are you sure you want to send ₦${amount.toFixed(2)} from ${cardInfo.number} to \n${recipientAccount.name} \n${recipientAccount.number}?`)) { // update: Confrim you want to send ₦amount from cardinfo.number to 
      // Deduct amount from cardinfo balance
      cardInfo.accountBalance -= amount;
      console.log("New available balance:", cardInfo.accountBalance);
      alert(`Transfer successful. Your new balance is ₦${cardInfo.accountBalance.toFixed(2)}.`);
  } else {
      alert("Transfer cancelled.");
  }
}


// Function to check balance
function checkBalance() {
    alert(`Your available balance is ₦${cardInfo.accountBalance.toFixed(2)}.`);
}

