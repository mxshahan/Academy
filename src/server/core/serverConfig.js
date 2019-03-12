import convert from 'koa-convert';
import cors from '@koa/cors';
import bodyParser from 'koa-body';
import helmet from 'koa-helmet';
import config from 'config';
import serve from 'koa-static';
import mount from 'koa-mount';
import historyApiFallback from 'koa-history-api-fallback';

import cModules from '../app';
import { catchErr, statusMessage } from './errorConfig';

function baseConfig(app) {
  app.keys = config.get('secret');
  app.proxy = true;

  app.use(mount('/public', serve(config.get('paths.static'))));

  app.use(convert.compose(
    catchErr,
    cors(),
    bodyParser({
      multipart: true,
      formLimit: '200mb'
    }),
    helmet(),
    statusMessage
  ));

  cModules(app);

  app.use(convert.compose(
    historyApiFallback(),
    // mount(serve(config.get('paths.dist.server'))),
    mount(serve(config.get('paths.static'))),
    mount('/client', serve(config.get('paths.dist.client')))
  ));
}

export default baseConfig;
