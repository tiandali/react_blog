

'use strict';
module.exports = (options, app) => {
  return async function(ctx, next) {
    const start = Date.now();
    await next();
    console.log(options.prefix + (Date.now() - start) + 'ms');
  };
};
