import { createLogger, format, transports, addColors } from 'winston';

const { combine, colorize, label, timestamp, printf } = format;

const logConfig = {
	colors: {
		info: 'italic blue',
		warn: 'italic bold yellow',
		error: 'italic bold red'
	}
};

const logFormat = combine(
	timestamp({ format: 'YYYY/MM/DD HH:MM' }),
	label({ label: '[LOGGER]' }),
	printf(({ timestamp, level, message }) => {
		return `[${timestamp}] - [${level.toUpperCase()}]: ${message}`;
	}),
	colorize({ all: true })
);

addColors(logConfig.colors);

const logger = createLogger({
	transports: [new transports.Console({ format: combine(logFormat) })]
});

export default logger;
