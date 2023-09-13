Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    cy.addContext(`../screenshots/${Cypress.spec.name}/${screenshotFileName}`);
  }
});
