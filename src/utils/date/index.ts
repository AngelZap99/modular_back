function getActualDate() {
	const date = new Date();
	date.setHours(date.getHours() - 6);

	return date.toISOString();
}

export { getActualDate };
