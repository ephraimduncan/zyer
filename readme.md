# zyer

A small https library for fetching data based of XMLHttpRequest inspired by [axios](https://github.com/axios/axios)

#### Usage

> This works in the browser only.
> I used this project to learn and understand Promises and Callbacks in JavaScript.
> It can be used, tested for major browsers

To use `zyer` you can download the source file [here](https://github.com/dephraiim/zyer/blob/master/zyer.js) and use it.

You can also install the package on npm and link it to your html file.<br> _You must have node installed_

```sh
npm i zyer
```

Then you can place the script in the code.

```html
<script src="./node_modules/zyer/zyer.js">
```

**Recommended Installation**
You can also use the CDN.

```html
<script src="https://unpkg.com/zyer@0.1.1/zyre.js">
```

#### Projections

- Replace new Promise() with async/await
- Implement zyer.all() for multiple requests
- Implement for Node.js and Deno(TypeScript)
- Transpile to ES5 and minify it for cdn

#### License

[MIT](./license)
