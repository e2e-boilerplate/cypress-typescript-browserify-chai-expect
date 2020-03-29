describe("Sandbox", () => {
  before(() => {
    cy.visit("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    expect(cy.title()).to.eq("Sandbox");
    expect(cy.get("h1")).to.eq("Sandbox");
  });
});
