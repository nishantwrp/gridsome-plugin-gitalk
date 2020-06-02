
# Gridsome Plugin Gitalk
<a href="https://npmjs.com/package/gridsome-plugin-gitalk"><img src="https://badge.fury.io/js/gridsome-plugin-gitalk.svg" alt="npm version"></a> <img src="https://badgen.net/github/license/nishantwrp/gridsome-plugin-gitalk"><img alt="npm" src="https://img.shields.io/npm/dt/gridsome-plugin-gitalk">

A plugin that simplifies adding [Gitalk](https://github.com/gitalk/gitalk) comments to Gridsome.


## Installation

```
# For npm
$ npm install gridsome-plugin-gitalk
# For yarn
$ yarn add gridsome-plugin-gitalk
```

## Usage

Add this plugin to your  `gridsome.config.js`

```js
plugins: [
  {
    use:  'gridsome-plugin-gitalk',
    options: {
      clientID:  '',
      ... // Gitalk config
    }
  }
]
```
Then simply add the following line to your Vue files.
```html
<Gitalk />
```
You can also specify options in the component itself like.
```html
<Gitalk :config={
  id: 'hi',
  ...
} />
```
> **Note**: If same option is specified in the `gridsome.config.js` and the component. The value in the component would be considered.

## Config Options

- **clientID** `String`

  **Required**. GitHub Application Client ID.

- **clientSecret** `String`

  **Required**. GitHub Application Client Secret.

- **repo** `String`

  **Required**. GitHub repository.

- **owner** `String`

  **Required**. GitHub repository owner. Can be personal user or organization.

- **admin** `Array`

  **Required**. GitHub repository owner and collaborators. (Users who having write access to this repository)

- **id** `String`

  Default: `location.href`.

  The unique id of the page. Length must less than 50.

- **number** `Number`

  Default: `-1`.

  The issue ID of the page, if the `number` attribute is not defined, issue will be located using `id`.

- **labels** `Array`

  Default: `['Gitalk']`.

  GitHub issue labels.

- **title** `String`

  Default: `document.title`.

  GitHub issue title.

- **body** `String`

  Default: `location.href + header.meta[description]`.

  GitHub issue body.

- **language** `String`

  Default: `navigator.language || navigator.userLanguage`.

  Localization language key, `en`, `zh-CN` and `zh-TW` are currently available.

- **perPage** `Number`

  Default: `10`.

  Pagination size, with maximum 100.

- **distractionFreeMode** `Boolean`

  Default: false.

  Facebook-like distraction free mode.

- **pagerDirection** `String`

  Default: 'last'

  Comment sorting direction, available values are `last` and `first`.

- **createIssueManually** `Boolean`

  Default: `false`.

  By default, Gitalk will create a corresponding github issue for your every single page automatically when the logined user is belong to the `admin` users. You can create it manually by setting this option to `true`.

- **proxy** `String`

  Default: `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`.

  GitHub oauth request reverse proxy for CORS. [Why need this?](https://github.com/isaacs/github/issues/330)

- **flipMoveOptions** `Object`

  Default:
  ```js
    {
      staggerDelayBy: 150,
      appearAnimation: 'accordionVertical',
      enterAnimation: 'accordionVertical',
      leaveAnimation: 'accordionVertical',
    }
  ```

  Comment list animation. [Reference](https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/enter_leave_animations.md)

- **enableHotKey** `Boolean`

  Default: `true`.

  Enable hot key (cmd|ctrl + enter) submit comment.


## License (MIT)

Open [LICENSE](./LICENSE) file for more info
