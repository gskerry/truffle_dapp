// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"getSender","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a03191633179055609d8060226000396000f3606060405260e060020a60003504635e01eb5a8114603857806383197ef014603f578063893d20e81460655780638da5cb5b146077575b005b6088335b90565b603660005433600160a060020a0390811691161415609b57600054600160a060020a0316ff5b6088600054600160a060020a0316603c565b6088600054600160a060020a031681565b600160a060020a03166060908152602090f35b56",
    unlinked_binary: "606060405260008054600160a060020a03191633179055609d8060226000396000f3606060405260e060020a60003504635e01eb5a8114603857806383197ef014603f578063893d20e81460655780638da5cb5b146077575b005b6088335b90565b603660005433600160a060020a0390811691161415609b57600054600160a060020a0316ff5b6088600054600160a060020a0316603c565b6088600054600160a060020a031681565b600160a060020a03166060908152602090f35b56",
    address: "0xaf122cb41facd5d17a0994959632d5bcc3bfb7b0",
    generated_with: "2.0.6",
    contract_name: "Showme"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Showme error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Showme error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Showme error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Showme error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Showme = Contract;
  }

})();
