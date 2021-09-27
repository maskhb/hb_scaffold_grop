链接本地脚手架：
```
cd your-cli-dir
npm link
```

链接本地库文件
```
cd your-lib-dir
npm link
cd your-cli-dir
npm link your-lib
```

取消链接本地库文件
```
cd your-lib-dir
npm unlink
cd your-cli-dir
#link存在
npm unlink your-lib
#link不存在
rm -rf node_modules
npm install
```

理解npm link

```
npm link your-lib ：将当前项目中node_modules下指定的库文件链接到node全局node_modules下的库文件

npm link：将当前项目链接到node全局 node_modules中作为一个库文件,并解析bin配置创建可执行文件
```

理解npm unlink
- ``npm unlink`` ：将当前项目从node全局node_modules中移除
- ``npm unlink your-lib``：将当前项目中的库文件依赖移除
————————————————