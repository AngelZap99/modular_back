import 'dotenv/config';
import express, { Express } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import morgan from 'morgan';

import logger from './utils/logger';

import apiRouter from './apiRouter';

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
		this.conectDB();
	}

	private start() {
		this.app.listen(this.port, () => {
			logger.info(`⚡⚡ This App is running in the PORT : ${this.port} ⚡⚡`);
		});
	}

	private async conectDB() {
		try {
			const prisma = new PrismaClient();
			await prisma.$connect();
			await prisma.$disconnect();
			this.start();
		} catch (error) {
			logger.error('The connection to the database could not be established');
			process.exit(0);
		}
	}
}
new ServerClass();
