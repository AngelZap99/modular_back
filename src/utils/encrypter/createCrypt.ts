import { genSalt, hash } from 'bcrypt';

async function createCrypt(password: string) {
	const saltRounds = 16;
	return await genSalt(saltRounds)
		.then((salt) => {
			return hash(password, salt);
		})
		.then((hash) => hash);
}

export { createCrypt };
