describe("InvoiceCreator", () => {

  var invoiceCreator;

  beforeEach(() => {
    invoiceCreator = new InvoiceCreator();
  });

  it("can execute", () => {
    expect(invoiceCreator).to.have.property("execute");
  });

});
