const getDefaultIgnorePatterns = () => {
  return [`**/${'node'}_modules`, '.yarn', '.huksy', '.chglog', 'api', '.rest-http'];
};

module.exports = {
  getDefaultIgnorePatterns,
};
