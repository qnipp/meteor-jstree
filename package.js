Package.describe({
  name: 'qnipp:jstree',
  version: '3.3.0',
  // Brief, one-line summary of the package.
  summary: 'jQuery tree plugin jsTree packaged for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/qnipp/meteor-jstree.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('jquery', 'client');

  api.addFiles([
    'jstree/jstree.js',
    'jstree/themes/default/style.css'
  ], 'client');

  api.addAssets([
    'jstree/themes/default/32px.png',
    'jstree/themes/default/40px.png',
    'jstree/themes/default/throbber.gif'
  ], 'client');

  // Second theme

  // Adding a second theme is useless, as the assets aren't loaded from the
  // CSS path

  // api.addAssets([
  //   'jstree/themes/default-dark/style.css',
  //   'jstree/themes/default-dark/32px.png',
  //   'jstree/themes/default-dark/40px.png',
  //   'jstree/themes/default-dark/throbber.gif'
  // ], 'client');

});

Package.onTest(function(api) {
});
