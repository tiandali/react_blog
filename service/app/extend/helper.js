'use strict';
const moment = require('moment');
moment.locale = require('moment/locale/zh-cn.js');
exports.relative = function(time) {
  return moment(time).fromNow();
};

