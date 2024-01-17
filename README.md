# fetchfile
JavaScript package letting you more easily fetch files from a github repo<br>
does most of the work for you instead of having to go through a bunch of json data to find things

- easy to use
- open source

<br>

```console
npm i fetchfile
```
```console
npm i paishee/fetchfile
```

<br>

<table>
<tr>
<td>JS</td><td>Output</td>
</tr>
<tr>
<td>
  
```js
const fetchfile = require('fetchfile');

fetchfile("https://github.com/paishee/aepl/blob/main/src/functions/AeplAddFunction.js")
  .then( (file) => {
    console.log(file)
  });
```

</td>

<td>

```js
FetchedFile {
    name: 'AeplAddFunction.js',
    url: 'https://github.com/paishee/aepl/blob/main/src/functions/AeplAddFunction.js',
    type: 'JavaScript',
    code: '...',
    lines: [...],
    path: 'src/functions/AeplAddFunction.js',
    tree: {
      'src/functions': { items: [...], totalCount: 14 },
      src: { items: [...], totalCount: 4 },
      '': { items: [...], totalCount: 5 }
    },
    repo: {...},
    payload: {...},
    blob: {...},
    data: {...}
}
```
  
</td>

</tr>
</table>
