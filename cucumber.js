module.exports = {
  default: {
    require: ['features/step_definitions/**/*.js', 'support/**/*.js'],
    format: ['progress', 'json:reports/cucumber-report.json'],
    paths: ['features/*.feature']
  }
};