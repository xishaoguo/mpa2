import Koa from "koa";
import config from "./config";
import routesInit from "./routes/routesInit.js"
import router from 'koa-simple-router'
import errorHandler from './middwares/errorHandler';
import log4js from 'log4js';

log4js.configure({
    appenders: { cheese: { type: 'file', filename: __dirname+'/logs/mylogs.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
const app = new Koa();
routesInit.init(app,router);
errorHandler.error(app,logger);
app.listen(config.port,()=>{
    console.log(`监听的端口是：${config.port}`);
});