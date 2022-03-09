# react_blog
react ，antd ，egg， mysql
### admin是后台界面:
```
cd admin 
npm start //启动

```
要注意请求接口的url地址：admin\src\config\apiUrl.js
```
let ipUrl = 'http://127.0.0.1:7002/admin/';

```


### blog是前端页面
```
cd blog 
npm start //启动

```
### service是服务端

```
cd service 
npm run dev //启动

```
相关配置文件：service\config\config.default.js
检查允许请求的origin
```javascript

/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575598501698_7096';

  // add your middleware config here
  config.middleware = [
    // 'adminauth',
    'time',
  ];
  exports.time = {
    prefix: '本次连接一共花费',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '12345678',
      // database
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  config.security = {
    csrf: { enable: false },
    domainWhiteList: ['*'],
  };
  config.cors = {
    origin: 'http://localhost:3000', // 只允许这个域进行访问接口
    // origin: '*',
    credentials: true, // 开启认证,cookie跨域
    allowMethods: 'GET,HEAD,PUT,PUSH,POST,DELETE,PATCH,OPTIONS',
  };
  config.view = {
    defaultExtension: 'ejs', // 默认的渲染引擎
    // 设置针对什么类型的文件用什么模板引擎来进行渲染
    mapping: {
      '.ejs': 'ejs',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};

```

