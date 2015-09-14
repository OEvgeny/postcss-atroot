# PostCSS at-root
PostCSS plugin to place rules directly at the root node.

The ``@at-root`` causes one or more rules to be emitted at the root of the document, rather than being nested beneath their parent selectors:
```css
.parent {
  ...
  @at-root{
    .child {...}
  }
}
```
Which would produce:
```css
.child { ... }
.parent { ... }
```

Also it will play well with ``@include``.

## Usage

```js
postcss([ require('postcss-mixins') ])
```

See [PostCSS] docs for examples for your environment.
