import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
	openapi: '3.0.0',
	info: {
		title: 'API Documentation',
		version: '0.0.1',
		description: `
    API documentation
    * API documentation should only work in a development environment, never in production.`
	},
	servers: [{ url: 'http://localhost:8001' }],
	components: {
		securitySchemes: {
			bearerAuth: {
				type: 'http',
				scheme: 'bearer'
			}
		},
		schemas: {}
	}
};

const swaggerOptions: OAS3Options = {
	swaggerDefinition,
	apis: ['../auth/routes/index.ts']
};

const swaggerConfig = swaggerJSDoc(swaggerOptions);

export default swaggerConfig;
