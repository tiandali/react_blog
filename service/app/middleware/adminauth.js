
'use strict';
module.exports = (options, app) => {
  return async function adminauth(ctx, next) {
    console.log('路由守卫权限', ctx.session.openId);
    await next();
    // if (ctx.session.openId) {
    //   await next();
    // } else {
    //   ctx.body = { data: '没有登录' };
    // }
  };
}
  ;
