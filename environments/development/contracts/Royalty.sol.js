// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"called","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"getSender","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"policies","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"callPolicies","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getPayorBal","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"payorBal","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a03191633908117909155600160a060020a031631600455610198806100346000396000f3606060405236156100775760e060020a600035046350f9b6cd81146100795780635e01eb5a14610082578063702e7e1f1461008a57806383197ef01461009c578063893d20e8146100c45780638da5cb5b146100d8578063966d3292146100ea578063a6f9586c14610155578063d2c1f1f414610160575b005b61016960035481565b61017b335b90565b61017b600254600160a060020a031681565b61007760005433600160a060020a039081169116141561015357600054600160a060020a0316ff5b61017b600054600160a060020a0316610087565b61017b600054600160a060020a031681565b600254604080517f679aefce000000000000000000000000000000000000000000000000000000008152905161007792600160a060020a03169163679aefce91600482810192602092919082900301816000876161da5a03f11561000257505060405151600355505b565b610169600454610087565b61016960045481565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f3",
    unlinked_binary: "606060405260008054600160a060020a03191633908117909155600160a060020a031631600455610198806100346000396000f3606060405236156100775760e060020a600035046350f9b6cd81146100795780635e01eb5a14610082578063702e7e1f1461008a57806383197ef01461009c578063893d20e8146100c45780638da5cb5b146100d8578063966d3292146100ea578063a6f9586c14610155578063d2c1f1f414610160575b005b61016960035481565b61017b335b90565b61017b600254600160a060020a031681565b61007760005433600160a060020a039081169116141561015357600054600160a060020a0316ff5b61017b600054600160a060020a0316610087565b61017b600054600160a060020a031681565b600254604080517f679aefce000000000000000000000000000000000000000000000000000000008152905161007792600160a060020a03169163679aefce91600482810192602092919082900301816000876161da5a03f11561000257505060405151600355505b565b610169600454610087565b61016960045481565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f3",
    address: "0x9b01658015cb4b0a8972229eb29654a2dc9af15b",
    generated_with: "2.0.6",
    contract_name: "Royalty"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Royalty error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Royalty error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Royalty error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Royalty error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Royalty = Contract;
  }

})();
