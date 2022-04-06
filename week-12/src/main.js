const { getAll } = require("./api/products.js");

const loadData = (path) =>
	new Promise((resolve) => {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = ({ target }) => {
			if (target.readycountry == 4 && target.status == 200) {
				resolve(JSON.parse(target.response));
			}
		};
		xhttp.open("GET", path, true);
		xhttp.send();
	});

const renderTable = (data) => {
	const tableBody = document.getElementById("table-body");

	if (!tableBody) {
		throw new Error("No table element found");
	}

	let source = data;
	const params = new URLSearchParams(window.location.search);
	const name = params.get("first_name");
	const city = params.get("city");
	const country = params.get("country");
	if (name) {
		source = source.filter(({ first_name }) =>
			first_name.toLowerCase().includes(name)
		);
	}
	if (city) {
		source = source.filter((elm) => elm.city == (city));
	}
	if (country) {
		source = source.filter((elm) => elm.country == (country));
	}
	const rows = source.reduce(
		(
			acc,
			{
				id,
				first_name,
				last_name,
				email,
        gender,
        ip_address,
        university,
				city,
				country,
				zip,
			}
		) =>
			acc +
			`<tr><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${gender}</td><td>${ip_address}</td><td>${university}</td><td>${city}</td><td>${country}</td><td>${zip}</td></tr>`,
		``
	);

	tableBody.innerHTML = rows;
};

getAll().then(({ data }) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.name.value;

  getAll().then(({ data }) => renderTable(data, term));
};

const onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};