# AngularJS Vertilize Directive

An [AngularJS](http://angularjs.org/) directive to vertically equalize a group of elements with varying heights. In other words, it dynamically makes a group of elements the same height.

## Usage
First, add `angular.vertilize` to your Angular application module dependencies. Then, use the `vertilize-container` directive and child `vertilize` directives on the HTML elements that you want to have equal heights maintained.

## Example
```html
<div vertilize-container>
    <div vertilize ng-repeat="tile in tiles">
        [Some varying content]
    </div>
</div>
```

## How it works
The `vertilize-container` directive groups and gives scope to it's child `vertilize` directives. The `vertilize` elements DO NOT need to be the immediate children of `vertilize-container` and can be on any kind of element, as long as its CSS `display` property is set to `block` or `inline-block`. When any of the `vertilize` elements' height changes to become the tallest sibling, either due to a window resize, element width change, or content being added or removed, all siblings set their height to match.

## Demo
Open the `index.html` file in your web browser or go to [http://sixthdim.github.io/angular-vertilize](http://sixthdim.github.io/angular-vertilize).

## Compatibility
angular-vertilize has been tested in all modern browsers, as well as IE8 and works well. Feel free to submit a pull request if you find a bug or have a better way of handling something in the module.

## License
MIT