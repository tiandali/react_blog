'use strict';

const news = [];
const str = `
<a href="/s?id=1652605559615056535" target="_blank">
年收入36万以下均是贫穷户？国家统计局回应
</a>
<a href="/s?id=1652617946201845645" target="_blank">
某论文说调控肠道菌群有助反腐？中纪委回应了
</a>
<a href="http://baijiahao.baidu.com/s?id=1652618388376840281" mon="ct=1&amp;a=2&amp;c=top&pn=6" target="_blank">
明年继续享受个税专项附加扣除，这七大提醒很重要
</a>
`;
// const reg = /<a href="(\/s\?id=[^"]+)".+>([\s\S]+?)<\/a>/g;
const reg = /<a\b[^>]*\bhref=([^\s>]+)[^>]*>[\s\S]*?([^<>]*)<\/a>/g;

str.replace(reg, function(matched, url, title) {
  console.log('matched: ', matched);
  console.log('url: ', url);
  console.log('title: ', title);
  if (!title.includes('img') || !title.includes('div')) {
    news.push({
      matched,
      title,
      url,
    });
  }
});
const result = str.match(reg);

console.log(result);

