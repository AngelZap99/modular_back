import 'dotenv/config';

import express, { Express } from 'express';
import cors from 'cors';
import logger from './utils/logger';

const PORT = process.env.PORT || 3001;

function server() {
	const app: Express = express();

	app.use(cors());

	app.listen(PORT, () => {
		logger.info(`⚡⚡ This App is running in the PORT : ${PORT} ⚡⚡`);
	});
}
server();
