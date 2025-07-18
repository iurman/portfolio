// apps/cms/src/index.ts
export default {
  /**
   * Register phase: run before your application is initialized.
   */
  register() { },

  /**
   * Bootstrap phase: run before your application starts.
   * Here we mount our /health endpoint on Strapi's internal Koa router.
   */
  bootstrap({ strapi }) {
    strapi.server.router.get('/health', async (ctx, next) => {
      ctx.body = {
        status: 'OK',
        uptime: process.uptime(),
        timestamp: Date.now(),
      };
      await next();
    });
  },
};
