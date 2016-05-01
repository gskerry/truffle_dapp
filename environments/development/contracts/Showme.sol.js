// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"getSender","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a03191633179055606b8060226000396000f3606060405260e060020a60003504635e01eb5a8114602e578063893d20e81460355780638da5cb5b146047575b005b6058335b90565b6058600054600160a060020a03166032565b6058600054600160a060020a031681565b600160a060020a03166060908152602090f3",
    unlinked_binary: "606060405260008054600160a060020a03191633179055606b8060226000396000f3606060405260e060020a60003504635e01eb5a8114602e578063893d20e81460355780638da5cb5b146047575b005b6058335b90565b6058600054600160a060020a03166032565b6058600054600160a060020a031681565b600160a060020a03166060908152602090f3",
    address: "0xae015a72b078405ee43ffefe557154f2e028a116",
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
