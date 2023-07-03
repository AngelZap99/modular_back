const errMsg = {
	notExists: 'This field must be exists',
	notEmpty: 'This field must be not empty',
	isString: 'This field must be a string',
	strSize: (min: string, max: string) =>
		`The filed must be a string with at least ${min} characters and maximum ${max}`,
	isNumber: 'This field must be a number',
	isBoolen: 'This field must be a boolean',
	isEmail: 'Must be a valid email, ...@host.domain',
	isStrongPass:
		'The password must have at least 8 characters, a capital letter and a number'
};

export { errMsg };
