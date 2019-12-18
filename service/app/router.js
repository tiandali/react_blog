'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  require('./router/default')(app);
  // router.get('/', controller.home.index);
  // router.get('/list', controller.home.list);
  require('./router/admin')(app);// 后台路由
};
