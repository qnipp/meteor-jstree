# qnipp:jstree

This is the jQuery tree plugin [jsTree](https://www.jstree.com) packaged for Meteor.

The package [qnipp:treeview](https://github.com/qnipp/meteor-treeview) relies on this package. It was not possible to include the JavaScript files there, as they are transpiled by the ecmascript package, leading to the error `babelHelpers is not defined` in the browser, as jsTree creates parts of the code dynamically in a `window.Blob`.

## Installation

    meteor add qnipp:jstree

## Usage

See the [jsTree documentation](https://www.jstree.com/).
