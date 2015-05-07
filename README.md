sprout-email
============

A [sprout](http://github.com/carrot/sprout) template for writing e-mail templates.  For what it's worth, writing e-mail templates is _the worst_.

This template uses:

- [grunt](http://gruntjs.com/) - task runner
- [jade](http://jade-lang.com/) - HTML preprocessor
- [stylus](http://learnboost.github.io/stylus/) - CSS preprocessor
- [juice](http://github.com/Automattic/juice) - inlines CSS styles in HTML

### Installation

```sh
$ npm install sprout -g
$ sprout add email git@github.com:carrot/sprout-email
```

### Usage

```sh
$ sprout init email /path/to/email
```

### Using the Generator
We've created a generator named `email` that you can use to generate different types of email-templates later that still use the basic structure of [sprout-email](https://github.com/carrot/sprout-email).

To utilize this feature:
- locate where you have your `sprout-email` template installed locally (likely: `~/.config/sprout/email` if you followed the above directions)
- add your template directory to `/stubs`.
- run the generator
- the generator will copy the contents of each stub to a `src` directory

```sh
$ sprout run email email <name-of-template-dir>
```

> Note, each template expects a `index.jade`, `layout.jade`, `style.styl` - if you don't include any of these, then the files from [src](root/src/) will be included as the default.
