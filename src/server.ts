import 'dotenv/config';
import express, { Express } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import apiRouter from './apiRouter';
import logger from './utils/logger';
import swaggerConfig from '../swagger/swaggerConfig';

const port: number = Number(process.env.PORT) || 3001;
const app: Express = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true, parameterLimit: 100 }));
app.use(morgan('tiny'));
app.use(cors());

// Swagger
String(process.env.ENV) === 'development' &&
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

// Routes
app.use('/api', apiRouter);

/**
 * @description check the connection to the database and start the server
 */
const runApp = async () => {
	try {
		const prisma = new PrismaClient();
		await prisma.$connect();
		await prisma.$disconnect();
		listen();
	} catch (error) {
		logger.error('The connection to the database could not be established');
		process.exit(0);
	}
};

const listen = () => {
	app.listen(port, () => {
		logger.info(`⚡⚡ This App is running in the PORT : ${port} ⚡⚡`);
	});
};

runApp();
