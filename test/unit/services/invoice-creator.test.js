describe("InvoiceCreator", () => {

  var invoiceCreator;

  beforeEach(() => {
    invoiceCreator = new InvoiceCreator();
  });

  it("can execute", () => {
    expect(invoiceCreator).to.have.property("execute");
  });
  describe("#execute", () => {
    it("returns an invoice object", done => {
    	var params = {
    		amount: 1
    	};
      var promise = invoiceCreator.execute(params);

      expect(promise).to.eventually.be.instanceof(Invoice).notify(done);
    });

    it("fails when amount is NULL", done => {
      var params = {};
      var promise = invoiceCreator.execute(params);
      expect(promise).to.eventually.be.rejected.notify(done);
    });

    it("fails when amount is negative", done => {
    	var params = {
    		amount: -1
    	};
    	var promise = invoiceCreator.execute(params);
    	expect(promise).to.eventually.be.rejected.notify(done);
    })

    it("fails when amount is not an instance of float", done => {
    	var params = {
    		amount: "pass"
    	}
    	var promise = invoiceCreator.execute(params);
    	expect(promise).to.be.eventually.be.rejected.notify(done);
    })
  });

});
