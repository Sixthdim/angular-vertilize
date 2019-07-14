NOTICE: This project has been retired as there are now better ways of accomplishing equal height elements with simpler methods. Here are some examples:
- [CSS Table Cell](https://www.w3schools.com/howto/howto_css_equal_height.asp)
- [CSS Flexbox Stretch](https://cssreference.io/flexbox/)
- [Flex Layout for Angular 2+](https://github.com/angular/flex-layout/wiki/Declarative-API-Overview)

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

## Usage: smallest height
Is it possibel do set, intead watch for the tallest element as base height, use the smallest one.

## Example: smallest height
```html
<div vertilize-container="min">...</div>
```

## How it works
The `vertilize-container` directive groups and gives scope to it's child `vertilize` directives. The `vertilize` elements DO NOT need to be the immediate children of `vertilize-container` and can be on any kind of element, as long as its CSS `display` property is set to `block` or `inline-block`. When any of the `vertilize` elements' height changes to become the tallest sibling, either due to a window resize, element width change, or content being added or removed, all siblings set their height to match.

## Demo
Open the `index.html` file in your web browser or go to [http://sixthdim.github.io/angular-vertilize](http://sixthdim.github.io/angular-vertilize).

## Compatibility
angular-vertilize has been tested in all modern browsers, as well as IE8 and works well. Feel free to submit a pull request if you find a bug or have a better way of handling something in the module.

## License
MIT
