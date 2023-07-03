import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import apiRouter from './apiRouter';

import logger from './utils/logger';

class ServerClass {
	private app: Express = express();
	private port: number = Number(process.env.PORT) || 3001;

	constructor() {
		// Middlewares
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true, parameterLimit: 100 }));
		this.app.use(morgan('tiny'));
		this.app.use(cors());

		// Routes
		this.app.use('/api', apiRouter);

		//Run App
		this.start();
	}

	public start() {
		this.app.listen(this.port, () => {
			logger.info(`⚡⚡ This App is running in the PORT : ${this.port} ⚡⚡`);
		});
	}
}
new ServerClass();
