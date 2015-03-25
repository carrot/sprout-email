<%= name %>
===========

<%= description %>

### Installation

From the project's root folder:

```sh
$ npm install
$ npm install grunt-cli --global
```

### Usage

- Write your HTML in `src/index.jade` and your CSS in `style.styl` (optionally, split your CSS into several files within the `src` directory)
  - [jade](http://jade-lang.com/) - HTML preprocessor
  - [stylus](http://learnboost.github.io/stylus/) - CSS preprocessor

- Compile:

  ```sh
  $ grunt compile
  ```

  This outputs an `index.html` file with the compiled HTML and inline CSS.

- Optionally, watch the `src` directory and compile when changes are saved:

  ```sh
  $ grunt
  ```
