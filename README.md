# ultima-thule

It's a sandbox project to testing VS Code and JavaScript + JSDoc type checking.

Read more: https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76

**YOU MUST ENABLE VALIDATION IN VS CODE PREFERENCES**

```
javascript.validate.enable=true
```

( Related issue: https://github.com/Microsoft/vscode/issues/39305 )

Optionally, you can turn on checking feature to all files:
```
"javascript.implicitProjectConfig.checkJs": true
```
## Validation example

When you edit your code, the VS Code checking JavaScript files automatically based on JSDoc.

Age must be a _number._

```javascript
// Wrong type!
const jane = new Person({
    name: 'Jane Doe',
    age: '10',
})
```

VS Code shows a message about this error:

1. line: `(property) age?: number` - means it is optional and number
2. line: `optional, must be between 0-150, default is 0` - textual documentation
3. line: `Type 'string' is not assignable to type 'number'.ts(2322)` - error message
4. line: `person.js(6, 8): The expected type comes from property 'age' which is declared here on type '{ name: string; age?: number; }'` – detailed error description: you can click on person.js for more information

![VS Code validation based on JSDoc](https://raw.githubusercontent.com/patoi/ultima-thule/master/vscode_jsdoc_1.png)