let lastId = 10000;

module.exports = {
	getNextId: () => {
		return lastId++;
	},
};
