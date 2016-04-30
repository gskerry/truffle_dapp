// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"refundTicket","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"newquota","type":"uint256"}],"name":"changeQuota","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"quota","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numRegistrants","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"buyTicket","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Refund","type":"event"}],
    binary: "606060405260008054600160a060020a031916331781556101f460035560025561025d8061002d6000396000f3606060405236156100615760e060020a6000350463705099b9811461006357806383197ef01461008a5780638da5cb5b146100b4578063a977c71e146100c6578063cebe09c9146100e9578063ec3a6f73146100f2578063edca914c146100fb575b005b61006160043560243560008054600160a060020a0390811633919091161461018257610256565b610061600054600160a060020a039081163391909116141561025b57600054600160a060020a0316ff5b610112600054600160a060020a031681565b610061600435600054600160a060020a039081163391909116146101795761017f565b61011260035481565b61011260025481565b610112600354600254600091901061011c57610176565b6060908152602090f35b600160a060020a03331680825260016020819052604080842034908190556002805490930190925560609283526080919091527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c91a15060015b90565b60038190555b50565b600160a060020a038316815260016020526040812054821415610256575030600160a060020a0381163182901061025657600160a060020a038316600083606082818181858883f193505050505060006001600050600085600160a060020a03168152602001908152602001600020600050819055506002600081815054809291906001900391905055507fbb28353e4598c3b9199101a66e0989549b659a59a54d2c27fbb183f1932c8e6d83836040518083600160a060020a031681526020018281526020019250505060405180910390a15b505050565b56",
    unlinked_binary: "606060405260008054600160a060020a031916331781556101f460035560025561025d8061002d6000396000f3606060405236156100615760e060020a6000350463705099b9811461006357806383197ef01461008a5780638da5cb5b146100b4578063a977c71e146100c6578063cebe09c9146100e9578063ec3a6f73146100f2578063edca914c146100fb575b005b61006160043560243560008054600160a060020a0390811633919091161461018257610256565b610061600054600160a060020a039081163391909116141561025b57600054600160a060020a0316ff5b610112600054600160a060020a031681565b610061600435600054600160a060020a039081163391909116146101795761017f565b61011260035481565b61011260025481565b610112600354600254600091901061011c57610176565b6060908152602090f35b600160a060020a03331680825260016020819052604080842034908190556002805490930190925560609283526080919091527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c91a15060015b90565b60038190555b50565b600160a060020a038316815260016020526040812054821415610256575030600160a060020a0381163182901061025657600160a060020a038316600083606082818181858883f193505050505060006001600050600085600160a060020a03168152602001908152602001600020600050819055506002600081815054809291906001900391905055507fbb28353e4598c3b9199101a66e0989549b659a59a54d2c27fbb183f1932c8e6d83836040518083600160a060020a031681526020018281526020019250505060405180910390a15b505050565b56",
    address: "0xe327678b9b6e251fe8867b33d0d4c25ee28f6579",
    generated_with: "2.0.6",
    contract_name: "Ticketbooth"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Ticketbooth error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Ticketbooth error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Ticketbooth error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Ticketbooth error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Ticketbooth = Contract;
  }

})();
