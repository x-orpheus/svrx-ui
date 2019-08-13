const Router = require('koa-router');
const storage = require('../storage');

const router = new Router({
  prefix: '/api/builtin',
});

router.get('/list/get', async (ctx) => {
  ctx.body = {
    code: 200,
    data: storage.get('builtins'),
  };
});

module.exports = router;
