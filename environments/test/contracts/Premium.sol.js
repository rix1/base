// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"getProfit","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"extractProfit","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"becomePremiumUser","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"isUserPremium","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getPrice","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"setPrice","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260638060106000396000f360606040523615604f5760e060020a6000350463679dffb4811460515780637a41d8b81460515780637a453269146051578063873612ee14605157806398d5fdca146055578063da93d0d1146051575b005b604f565b62030d406060908152602090f3",
    unlinked_binary: "606060405260638060106000396000f360606040523615604f5760e060020a6000350463679dffb4811460515780637a41d8b81460515780637a453269146051578063873612ee14605157806398d5fdca146055578063da93d0d1146051575b005b604f565b62030d406060908152602090f3",
    address: "0x2f95fcf79a52fa57d2e7aa4188566b6be33c06e5",
    generated_with: "2.0.9",
    contract_name: "Premium"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Premium error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Premium error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Premium error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Premium error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Premium = Contract;
  }

})();
