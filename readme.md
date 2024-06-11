## 1.

https://eslint.org/docs/latest/use/getting-started


## 2. npx eslint src

## 3. 运行时报错： SyntaxError: Cannot use import statement outside a module

这个错误是因为 Node.js 默认不支持 ES 模块（ESM）语法 `import`，除非明确指定。要解决这个问题，可以选择以下几种方式：

### 方法 1：使用 CommonJS 语法

如果不需要使用 ESM 语法，可以将 `import` 语句替换为 CommonJS 语法 `require`：

```javascript
const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,

    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];
```

### 方法 2：启用 ES 模块支持

如果希望继续使用 ESM 语法，需要确保以下几点：

1. **package.json 文件中添加 `"type": "module"`**：
   在项目的 `package.json` 文件中，添加 `"type": "module"` 字段：

   ```json
   {
     "type": "module"
   }
   ```

2. **使用 .mjs 扩展名**：
   将 ESLint 配置文件的扩展名从 `.js` 改为 `.mjs`，例如 `eslint.config.mjs`：

   ```javascript
   import js from "@eslint/js";

   export default [
       js.configs.recommended,

       {
           rules: {
               "no-unused-vars": "warn",
               "no-undef": "warn"
           }
       }
   ];
   ```

### 方法 3：使用 Babel 转译

如果项目中已经使用 Babel，可以通过 Babel 转译 ESLint 配置文件：

1. **安装 Babel**：
   确保 Babel 已经安装并正确配置。

2. **创建 .babelrc 配置文件**：
   如果还没有 `.babelrc` 或 `babel.config.js` 文件，创建一个以支持 ESM 语法：

   ```json
   {
     "presets": ["@babel/preset-env"]
   }
   ```

3. **使用 Babel CLI 执行 ESLint**：
   修改 `package.json` 中的 ESLint 脚本，使其使用 Babel 转译：

   ```json
   {
     "scripts": {
       "lint": "babel-node node_modules/.bin/eslint ."
     }
   }
   ```

### 额外提示：检查 Node.js 版本

确保你使用的是 Node.js 的较新版本（14.x 或更高版本），因为旧版本的 Node.js 对 ES 模块的支持较差。

### 综述

根据你的需求和项目的配置环境，可以选择上述方法之一。推荐的方法是方法 1，因为它简单且兼容性好。如果项目中需要广泛使用 ESM 语法，可以考虑方法 2 或方法 3。