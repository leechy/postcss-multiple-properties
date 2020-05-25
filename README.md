# PostCSS Multiple Properties Plugin

[PostCSS] plugin that parses multiple comma separated property names with the same value to separate property declarations.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  top,left,padding,margin: 0;
}
```

```css
.foo {
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
}
```

## Warning

Due to the specifics of the PostCSS default parser you are not able to use any whitespace characters
between the propery names. Only commas.

In order to work as expected, this plugin should use custom PostCSS parser that handles declaration
property names with whitespace (probably whitespace with commas in it). This parser is yet to be developed.


## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-multiple-properties'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
