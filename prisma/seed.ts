import { PrismaClient, Role } from '@prisma/client';
import { createCrypt } from '../src/utils/encrypter';
const prisma = new PrismaClient();

async function main() {
	const date = new Date();

	const admin = await prisma.users.create({
		data: {
			email: 'admin@provicional.com',
			nickname: 'Administrador',
			password: await createCrypt('Provicional'),
			role: Role.ADMIN,
			profile_image: '',
			created_date: date,
			created_user_id: null,
			updated_date: date,
			updated_user_id: null
		}
	});
	console.log(admin);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
