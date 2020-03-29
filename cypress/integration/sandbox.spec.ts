describe("Sandbox", () => {
  before(() => {
    cy.visit("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await cy.title();
    const header = await cy.get("h1");
    expect(title).to.eq("Sandbox");
    expect(header).to.eq("Sandbox");
  });
});
