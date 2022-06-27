const confirmationPage = '.permissions-connect';
const confirmationPageFooter = `${confirmationPage}-choose-account__footer-container`;
const footer = {
  footer: confirmationPageFooter,
  cancelButton: `${confirmationPageFooter} .btn-secondary`,
  nextButton: `${confirmationPageFooter} .btn-primary`,
  connectButton: '[data-testid="page-container-footer-next"]',
};

module.exports.confirmationPageElements = {
  confirmationPage,
  footer,
};
