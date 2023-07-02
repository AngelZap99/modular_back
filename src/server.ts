import 'dotenv/config';

import express, { Express } from 'express';
import cors from 'cors';

import apiRouter from './apiRouter';

import logger from './utils/logger';

const PORT = process.env.PORT || 3001;

function server() {
	const app: Express = express();

	app.routes();
	app.use(cors());

	app.use('/api', apiRouter);

	app.listen(PORT, () => {
		logger.info(`⚡⚡ This App is running in the PORT : ${PORT} ⚡⚡`);
	});
}
server();
