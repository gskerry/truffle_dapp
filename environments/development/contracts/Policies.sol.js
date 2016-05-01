// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"newrate","type":"uint256"}],"name":"setRate","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getRate","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"royalty_rate","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a0319163317905560b88060226000396000f3606060405260e060020a600035046334fcf43781146042578063679aefce14606057806383197ef014606e5780638da5cb5b146094578063dc1e9c451460a5575b005b604060043560005433600160a060020a0390811691161460ad5760b3565b6001545b6060908152602090f35b604060005433600160a060020a039081169116141560b657600054600160a060020a0316ff5b6064600054600160a060020a031681565b606460015481565b60018190555b50565b56",
    unlinked_binary: "606060405260008054600160a060020a0319163317905560b88060226000396000f3606060405260e060020a600035046334fcf43781146042578063679aefce14606057806383197ef014606e5780638da5cb5b146094578063dc1e9c451460a5575b005b604060043560005433600160a060020a0390811691161460ad5760b3565b6001545b6060908152602090f35b604060005433600160a060020a039081169116141560b657600054600160a060020a0316ff5b6064600054600160a060020a031681565b606460015481565b60018190555b50565b56",
    address: "0x2a78ce9e6ee2c47c17fb18a2c20c9f115e058055",
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
