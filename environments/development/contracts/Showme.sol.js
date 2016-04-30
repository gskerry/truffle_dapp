// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"}],
    binary: "606060405260668060106000396000f3606060405260e060020a6000350463893d20e8811460245780638da5cb5b146048575b005b60005473ffffffffffffffffffffffffffffffffffffffff165b6060908152602090f35b603e60005473ffffffffffffffffffffffffffffffffffffffff168156",
    unlinked_binary: "606060405260668060106000396000f3606060405260e060020a6000350463893d20e8811460245780638da5cb5b146048575b005b60005473ffffffffffffffffffffffffffffffffffffffff165b6060908152602090f35b603e60005473ffffffffffffffffffffffffffffffffffffffff168156",
    address: "0x97c251c212efd64720b5b8d884f5b9e317ad68cd",
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
