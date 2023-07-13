import { compare } from 'bcrypt';

async function compareCrypt(password: string, hash: string) {
	return await compare(password, hash)
		.then((res) => res === true)
		.catch(() => false);
}

export { compareCrypt };
