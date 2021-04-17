# element-theme-maker
一个基于gulp实现的element-plus主题生成器

# 使用

1. 打开`package.json`文件，修改依赖中`"element-plus": "^1.0.2-beta.39"`的版本号与自己项目中的版本号相同

2. 安装依赖，使用终端软件打开当前文件夹，输入`npm i`，回车运行

3. 打开`theme/element-variables.scss`，修改你想更改的sass变量。如果改乱了想恢复默认值，可以拷贝同目录下`element-variables-default.scss`中的内容，覆盖即可

4. 回到终端，按如下格式输入命令：

   ```powershell
   npm run build -- --theme-default
   ```

   或者

   ```
   gulp --theme-default
   ```

   **参数注释：**

   `--theme-default`：这个参数是整个主题的命名空间，也就是每个样式类共同具有的一个父类。可将其添加至`body`标签，以达到切换主题的目的

5. 运行成功之后，会在根目录出现一个`result`文件夹，其中的内容就是生成的主题的css文件，可直接拷贝到项目中使用