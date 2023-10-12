describe("Homepage", () => {
  it("should open Next.js documentation in a new tab", () => {
    cy.visit("http://localhost:3001");

    // Find the link with the specified href
    cy.get(
      'a[href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"]'
    )
      .should("have.attr", "target", "_blank") // Ensure it opens in a new tab
      .should("have.attr", "rel", "noopener noreferrer") // Ensure rel attributes are set correctly
      .click(); // Click the link

    // Confirm that a new tab was opened
    cy.window().then(($win) => {
      expect($win.top).not.to.equal($win.self);
    });

    // Switch to the newly opened tab
    cy.window().then(($win) => {
      cy.visit($win.location.href);
    });
  });
});
