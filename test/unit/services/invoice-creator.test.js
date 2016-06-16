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
      var params = {};
      var promise = invoiceCreator.execute(params);
      console.log(Invoice);
      expect(promise).to.eventually.be.instanceof(Invoice).notify(done);
    });

    it("fails when no amount is NULL", done => {
      var params = {};
      var promise = invoiceCreator.execute(params);
      expect(promise).to.eventually.be.rejected.notify(done);
    });
  });

});
