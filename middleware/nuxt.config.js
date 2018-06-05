export default {
  router: {
    // `visits`、`user-agent`ミドルウェアは毎回ルートが変更すると実行される
    middleware: ['visits', 'user-agent'],
  },
};
