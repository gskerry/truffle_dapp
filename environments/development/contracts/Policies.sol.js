// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"newrate","type":"uint256"}],"name":"setRate","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getRate","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"royalty_rate","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"mymessage","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a031916331790556001805560cf8060266000396000f360606040523615604f5760e060020a600035046334fcf43781146051578063679aefce14606f57806383197ef014607d5780638da5cb5b1460a3578063dc1e9c451460b4578063eb3a9bd81460bc575b005b604f60043560005433600160a060020a0390811691161460c45760ca565b6001545b6060908152602090f35b604f60005433600160a060020a039081169116141560cd57600054600160a060020a0316ff5b6073600054600160a060020a031681565b607360015481565b607360025481565b60018190555b50565b56",
    unlinked_binary: "606060405260008054600160a060020a031916331790556001805560cf8060266000396000f360606040523615604f5760e060020a600035046334fcf43781146051578063679aefce14606f57806383197ef014607d5780638da5cb5b1460a3578063dc1e9c451460b4578063eb3a9bd81460bc575b005b604f60043560005433600160a060020a0390811691161460c45760ca565b6001545b6060908152602090f35b604f60005433600160a060020a039081169116141560cd57600054600160a060020a0316ff5b6073600054600160a060020a031681565b607360015481565b607360025481565b60018190555b50565b56",
    address: "0x21bfbd3b80d5f1487bef6515b523f5273632c452",
    generated_with: "2.0.6",
    contract_name: "Policies"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Policies error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Policies error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Policies error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Policies error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Policies = Contract;
  }

})();
