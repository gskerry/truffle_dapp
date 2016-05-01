// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"called","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"getSender","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"policies","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"callPolicies","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a03191633179055610152806100246000396000f3606060405236156100615760e060020a600035046350f9b6cd81146100635780635e01eb5a1461006c578063702e7e1f1461007457806383197ef014610086578063893d20e8146100ae5780638da5cb5b146100c2578063966d3292146100d4575b005b61013560035481565b61013f335b90565b61013f600254600160a060020a031681565b61006160005433600160a060020a039081169116141561013357600054600160a060020a0316ff5b61013f600054600160a060020a0316610071565b61013f600054600160a060020a031681565b6002547f679aefce00000000000000000000000000000000000000000000000000000000606090815261006191600160a060020a03169063679aefce906064906020906004816000876161da5a03f11561000257505060405151600355505b565b6060908152602090f35b600160a060020a03166060908152602090f3",
    unlinked_binary: "606060405260008054600160a060020a03191633179055610152806100246000396000f3606060405236156100615760e060020a600035046350f9b6cd81146100635780635e01eb5a1461006c578063702e7e1f1461007457806383197ef014610086578063893d20e8146100ae5780638da5cb5b146100c2578063966d3292146100d4575b005b61013560035481565b61013f335b90565b61013f600254600160a060020a031681565b61006160005433600160a060020a039081169116141561013357600054600160a060020a0316ff5b61013f600054600160a060020a0316610071565b61013f600054600160a060020a031681565b6002547f679aefce00000000000000000000000000000000000000000000000000000000606090815261006191600160a060020a03169063679aefce906064906020906004816000876161da5a03f11561000257505060405151600355505b565b6060908152602090f35b600160a060020a03166060908152602090f3",
    address: "0x2c6850ecbb08b0bd747675a1de375ffd02041080",
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
