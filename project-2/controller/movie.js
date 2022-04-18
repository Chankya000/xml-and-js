const movies = require("../data/movie");

const getAll = (data = {}) =>
	new Promise((resolve) => {
		let result = Array.from(movies);
		if (data.id) {
			result = result.filter((x) => x.id === parseInt(data.id));
		}
		if (data.movie_title) {
			result = result.filter((x) => x.movie_title.toLowerCase().includes(data.movie_title.toLowerCase()));
		}
		if (data.language) {
			result = result.filter((x) => x.language.toLowerCase().includes(data.language.toLowerCase()));
		}
		if (data.catch_phrase) {
			result = result.filter((x) => x.catch_phrase === data.catch_phrase.toLowerCase());
		}
		resolve({ code: 200, data: result });
	});

const getById = (id) =>
	new Promise((resolve) => {
		const movie = movies.find((movie) => movie.id === id);

		if (movie) {
			resolve({ code: 200, data: movie });
		} else {
			resolve({
				code: 404,
				data: { message: `No movie is present for id: ${id}` },
			});
		}
	});

module.exports = {
	getAll,
	getById,
};
