const { getAll } = require("./controller/movie.js");

const renderTable = (data, nameTerm) => {
	const tableBody = document.getElementById("table-data");

	if (!tableBody) {
		throw new Error("No table element found");
	}

	let source = data;


	const rows = source.reduce(
		(acc, { id, movie_title, language, catch_phrase }) =>
			acc +
			`<tr id="table-row-${id}"><td>${id}</td><td>${movie_title}</td><td>${language}</td><td>${catch_phrase}</td></tr>`,
		``
	);

	tableBody.innerHTML = rows;
};

getAll().then(({ data }) =>  {
  renderTable(data)
});

window.onSubmit = (event) => {
	event.preventDefault();

	const id = event.target.id.value;
	const movie_title = event.target.movie_title.value;
	const language = event.target.language.value;
	const catch_phrase = event.target.catch_phrase.value;

	getAll({ id, movie_title, language, catch_phrase }).then(({ data }) =>
		renderTable(data)
	);
};

window.onReset = () => {
	getAll().then(({ data }) => renderTable(data));
};
