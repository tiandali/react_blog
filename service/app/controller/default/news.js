'use strict';
const { Controller } = require('egg');
class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    // const news = [
    //   {
    //     title: 'baidu',
    //     url: 'https://www.baidu.com',
    //   },
    //   {
    //     title: 'taobao',
    //     url: 'https://www.taobao.com',
    //   },
    // ];
    // ctx.body = 'this news';
    const news = await this.ctx.service.news.fetch();
    await ctx.render('news.ejs', { news });
  }
}
module.exports = NewsController;
