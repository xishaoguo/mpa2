  const routesInit = {
      init(app,router){
        app.use(router(_ => {
            _.get('/', (ctx, next) => {
              ctx.body = 'hello'
            })
        }));
      }
  }
  export default routesInit;