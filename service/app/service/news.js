'use strict';

const { Service } = require('egg');
// const moment = require('moment');
// moment.locale = ('zh-cn');
class NewsService extends Service {
  async fetch() {
    let { data } = await this.ctx.curl('https://news.baidu.com');
    // console.log(this.ctx.helper);
    data = data.toString();
    const news = [];
    const reg = /<a\b[^>]*\bhref="(https:\/\/[^\s>]+)[^>]*>[\s\S]*?([^<>]*)<\/a>/g;
    // const reg = /<a\b[^>]*\bhref="([^\s>]+)[^>]*>[\s\S]*?([^<>]*)<\/a>/g;// 这个也可以
    data.replace(reg, (matched, url, title) => {
      if (!title.includes('img') || !title.includes('div')) {
        news.push({
          matched,
          title,
          url: '' + url,
          time: new Date(),
          // time: this.ctx.helper.relative(new Date()),
          // time: moment(new Date()).fromNow(),
        });
      }
    });
    return news;
  }

}
module.exports = NewsService;
