
var accounts;
var account;
var balance;
var ethbal
var coinbase;
var called_rate;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  var meta = MetaCoin.deployed();
  /*
  Is this is Truffle method or native web3?
  Can't write contract.deployed() from another contract... 
  research: how contracts registered on deployment, how one contract finds another...
  */

  meta.getBalance.call(account, {from: account}).then(function(value) {
    // {from: variable} --> is this truffle syntax?
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
};

function refreshETHBalance() {
  web3.eth.getBalance(account, function(value) {
    console.log("Value: ",value)
    var ethbalance_element = document.getElementById("ethbalance");
    ethbalance_element.innerHTML = ethbal;
  })

  var base_el = document.getElementById("coinbase");
    base_el.innerHTML = coinbase;

};


function refreshPolicies() {

   var policies = Policies.deployed();
   console.log("policies: ",policies)

   var policies_addr = document.getElementById("policies_addr");
   policies_addr.innerHTML = policies.address;

   var policies_rate = policies.getRate.call().then(function(value){
      console.log("called_rate: ",value)
      var policy_rate = document.getElementById("policy_rate");
      policy_rate.innerHTML = value;      

   })
};


function executeRoyalty(){

  var royalty = Royalty.deployed();
  console.log("royalty: ",royalty)

  var royalty_addr = document.getElementById("royalty_addr");
  royalty_addr.innerHTML = royalty.address;

  royalty.getOwner.call()
    .then(function(owner) {
      var owner_element = document.getElementById("owner");
      owner_element.innerHTML = owner;
    }).catch(function(e) {
      console.log(e);
      setStatus("Error getting owner; see log.");
  });

  royalty.getSender.call({from: account})
    .then(function(sender) {
      var sender_element = document.getElementById("txsender");
      sender_element.innerHTML = sender;
    }).catch(function(e) {
      console.log(e);
      setStatus("Error getting owner; see log.");
  });

    royalty.getPayorBal.call()
      .then(function(val){
         var payorBal = document.getElementById("payorBal");
         payorBal.innerHTML = val;
      }).catch(function(e){
         console.log("err",e)
      }) 


    // web3.eth.getBalance({from: account}, function(err, val){
    //   royalty.setPayorBal.call(val)
    //   .then(function(){
    //      royalty.getPayorBal.call()
    //   }).then(function(val){
    //      var payorBal = document.getElementById("payorBal");
    //      payorBal.innerHTML = val;
    //   }).catch(function(e){
    //      console.log("err",e)
    //   })  
    // })

    


}



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
    // ethbal = web3.fromWei(weibal, 'gether')
    coinbase = web3.eth.coinbase

    refreshBalance();
    refreshETHBalance();
    refreshPolicies();

  });


/*  web3.eth.coinbase(function(err, result){
    var coinbase = document.getElementById("coinbase");
    coinbase.innerHTML = result;
  })*/


}
