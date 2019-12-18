
'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/news', controller.default.news.index);// 珠峰学爬虫
  router.get('/default/index', controller.default.home.index);
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById);
  router.get('/default/getTypeInfo', controller.default.home.getTypeInfo);
  router.get('/default/getListById/:id', controller.default.home.getListById);
};
