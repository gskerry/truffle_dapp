var accounts;
var account;
var balance;
var ethbal
var coinbase;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  var meta = MetaCoin.deployed();

  meta.getBalance.call(account, {from: account}).then(function(value) {
    // {from: variable} --> is this truffle syntax?
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
};

/* THIS ONE!  */

function refreshETHBalance() {
  web3.eth.getBalance(account, function(value) {
    console.log("Value: ",value)
    var ethbalance_element = document.getElementById("ethbalance");
    ethbalance_element.innerHTML = ethbal;
  })

  var base_el = document.getElementById("coinbase");
    base_el.innerHTML = coinbase;

};


function sendCoin() {
  var meta = MetaCoin.deployed();

  var amount = parseInt(document.getElementById("amount").value);
  var receiver = document.getElementById("receiver").value;

  setStatus("Initiating transaction... (please wait)");

  meta.sendCoin(receiver, amount, {from: account}).then(function() {
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

window.onload = function() {
  
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;

    var acctdisplay = document.getElementById("accounts");
    acctdisplay.innerHTML = accounts;

    account = accounts[1];

    var mainacct = document.getElementById("mainacct");
    mainacct.innerHTML = account;

    ethbal = web3.eth.getBalance(account).toString(10);
    coinbase = web3.eth.coinbase

    refreshBalance();
    refreshETHBalance();

  });

  

/*  web3.eth.coinbase(function(err, result){
    var coinbase = document.getElementById("coinbase");
    coinbase.innerHTML = result;
  })*/


}
