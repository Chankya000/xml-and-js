(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../data/movie":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"movie_title":"Three Kings","language":"Georgian","catch_phrase":"Open-source regional budgetary management"},
	{"id":2,"movie_title":"Timecop","language":"Kannada","catch_phrase":"User-centric bandwidth-monitored policy"},
	{"id":3,"movie_title":"My Date with Drew","language":"Dhivehi","catch_phrase":"Sharable zero defect benchmark"},
	{"id":4,"movie_title":"Substitute, The","language":"English","catch_phrase":"Focused optimal model"},
	{"id":5,"movie_title":"Rogue","language":"Northern Sotho","catch_phrase":"Optimized tertiary software"},
	{"id":6,"movie_title":"Polisse","language":"Irish Gaelic","catch_phrase":"Open-source systemic capacity"},
	{"id":7,"movie_title":"Class of 1984","language":"Japanese","catch_phrase":"Operative system-worthy customer loyalty"},
	{"id":8,"movie_title":"Schizopolis","language":"Swedish","catch_phrase":"Phased user-facing open system"},
	{"id":9,"movie_title":"Legend of Leigh Bowery, The","language":"Sotho","catch_phrase":"Cross-platform client-server strategy"},
	{"id":10,"movie_title":"Getting Even with Dad","language":"Tamil","catch_phrase":"Enterprise-wide 4th generation protocol"},
	{"id":11,"movie_title":"Experience, The (Tadjrebeh)","language":"Gagauz","catch_phrase":"Enterprise-wide systematic customer loyalty"},
	{"id":12,"movie_title":"OT: Our Town","language":"Spanish","catch_phrase":"Optimized secondary conglomeration"},
	{"id":13,"movie_title":"Physical Evidence","language":"Hindi","catch_phrase":"Public-key regional conglomeration"},
	{"id":14,"movie_title":"Bread and Chocolate (Pane e cioccolata)","language":"Armenian","catch_phrase":"Mandatory eco-centric matrix"},
	{"id":15,"movie_title":"Long Goodbye, The","language":"Papiamento","catch_phrase":"Function-based optimizing encoding"},
	{"id":16,"movie_title":"Original Sin","language":"French","catch_phrase":"Triple-buffered multimedia adapter"},
	{"id":17,"movie_title":"Tru Confessions","language":"Greek","catch_phrase":"Assimilated static open architecture"},
	{"id":18,"movie_title":"Woman in the Moon (By Rocket to the Moon) (Frau im Mond)","language":"Albanian","catch_phrase":"Quality-focused human-resource archive"},
	{"id":19,"movie_title":"Svensson, Svensson - I n??d och lust","language":"Yiddish","catch_phrase":"Cross-group incremental leverage"},
	{"id":20,"movie_title":"Navigator, The","language":"Telugu","catch_phrase":"Ergonomic 5th generation hierarchy"},
	{"id":21,"movie_title":"The Big Flame","language":"Danish","catch_phrase":"Horizontal 24/7 extranet"},
	{"id":22,"movie_title":"Tabloid","language":"Moldovan","catch_phrase":"Expanded tangible intranet"},
	{"id":23,"movie_title":"Mr. Skeffington","language":"Icelandic","catch_phrase":"Quality-focused tangible database"},
	{"id":24,"movie_title":"Robot & Frank","language":"Kashmiri","catch_phrase":"Up-sized object-oriented capability"},
	{"id":25,"movie_title":"Vampire's Kiss","language":"Chinese","catch_phrase":"Integrated secondary Graphic Interface"},
	{"id":26,"movie_title":"Dope","language":"West Frisian","catch_phrase":"Stand-alone dynamic functionalities"},
	{"id":27,"movie_title":"Bound by Flesh ","language":"Latvian","catch_phrase":"Integrated disintermediate success"},
	{"id":28,"movie_title":"Claymation Christmas Celebration, A","language":"Amharic","catch_phrase":"Profit-focused zero defect adapter"},
	{"id":29,"movie_title":"Don","language":"Kyrgyz","catch_phrase":"Synergistic actuating neural-net"},
	{"id":30,"movie_title":"Mister 880","language":"Malay","catch_phrase":"Organized non-volatile productivity"},
	{"id":31,"movie_title":"Autohystoria","language":"Punjabi","catch_phrase":"Persevering attitude-oriented initiative"},
	{"id":32,"movie_title":"Starbuck","language":"Norwegian","catch_phrase":"Proactive intangible concept"},
	{"id":33,"movie_title":"Louis C.K.: Hilarious","language":"Yiddish","catch_phrase":"Synchronised motivating core"},
	{"id":34,"movie_title":"Abbott and Costello Go to Mars","language":"Azeri","catch_phrase":"Advanced dynamic knowledge base"},
	{"id":35,"movie_title":"Darkness/Light/Darkness (Tma/Svetlo/Tma)","language":"Tsonga","catch_phrase":"Up-sized coherent model"},
	{"id":36,"movie_title":"Lost Boys: The Thirst","language":"Indonesian","catch_phrase":"Monitored clear-thinking capacity"},
	{"id":37,"movie_title":"Child I Never Was, The (Leben lang kurze Hosen Tragen, Ein)","language":"Romanian","catch_phrase":"Sharable fault-tolerant product"},
	{"id":38,"movie_title":"New One-Armed Swordsman, The (Xin du bi dao)","language":"Lithuanian","catch_phrase":"Switchable zero administration toolset"},
	{"id":39,"movie_title":"Stille Nacht I: Dramolet","language":"Finnish","catch_phrase":"Enhanced zero defect internet solution"},
	{"id":40,"movie_title":"At Sea","language":"Czech","catch_phrase":"Function-based value-added open system"},
	{"id":41,"movie_title":"Phenomenon","language":"Japanese","catch_phrase":"Compatible next generation knowledge base"},
	{"id":42,"movie_title":"All the Fine Young Cannibals","language":"Khmer","catch_phrase":"Advanced system-worthy help-desk"},
	{"id":43,"movie_title":"Season of the Witch","language":"English","catch_phrase":"Upgradable holistic hierarchy"},
	{"id":44,"movie_title":"Quiet as a Mouse (Muxm??uschenstill)","language":"Norwegian","catch_phrase":"Down-sized reciprocal superstructure"},
	{"id":45,"movie_title":"Dope","language":"Swedish","catch_phrase":"Re-engineered upward-trending paradigm"},
	{"id":46,"movie_title":"Moon","language":"Bulgarian","catch_phrase":"Polarised contextually-based conglomeration"},
	{"id":47,"movie_title":"Day The Earth Froze, The (Sampo)","language":"Swahili","catch_phrase":"Assimilated background function"},
	{"id":48,"movie_title":"Niko & the Way to the Stars (a.k.a. The Flight Before Christmas) (Niko - Lent??j??n poika)","language":"Haitian Creole","catch_phrase":"Ameliorated attitude-oriented structure"},
	{"id":49,"movie_title":"Wild One, The","language":"Armenian","catch_phrase":"Sharable bandwidth-monitored instruction set"},
	{"id":50,"movie_title":"Out Late ","language":"Bosnian","catch_phrase":"Digitized object-oriented interface"},
	{"id":51,"movie_title":"Winnie the Pooh and a Day for Eeyore","language":"Guaran??","catch_phrase":"Inverse 6th generation definition"},
	{"id":52,"movie_title":"Execution Squad","language":"Hindi","catch_phrase":"Cross-platform methodical parallelism"},
	{"id":53,"movie_title":"Tetro","language":"Tswana","catch_phrase":"Face to face empowering capability"},
	{"id":54,"movie_title":"Great Ziegfeld, The","language":"Moldovan","catch_phrase":"Customizable stable function"},
	{"id":55,"movie_title":"D.A.R.Y.L.","language":"Marathi","catch_phrase":"Open-architected even-keeled service-desk"},
	{"id":56,"movie_title":"Max Keeble's Big Move","language":"Hebrew","catch_phrase":"De-engineered dedicated capacity"},
	{"id":57,"movie_title":"Invincible","language":"Luxembourgish","catch_phrase":"Optional uniform definition"},
	{"id":58,"movie_title":"Rent-a-Kid","language":"Dari","catch_phrase":"Monitored user-facing data-warehouse"},
	{"id":59,"movie_title":"Ladies in Lavender","language":"West Frisian","catch_phrase":"Realigned real-time productivity"},
	{"id":60,"movie_title":"Darkness/Light/Darkness (Tma/Svetlo/Tma)","language":"Quechua","catch_phrase":"Synergized demand-driven circuit"},
	{"id":61,"movie_title":"Moscow Clad in Snow (Moscou sous la neige) ","language":"Portuguese","catch_phrase":"Innovative demand-driven website"},
	{"id":62,"movie_title":"Wings (Krylya)","language":"Italian","catch_phrase":"Front-line scalable methodology"},
	{"id":63,"movie_title":"3 Sailors and a Girl (Three Sailors and a Girl)","language":"Fijian","catch_phrase":"Virtual context-sensitive Graphical User Interface"},
	{"id":64,"movie_title":"Charlie Chan in the Secret Service","language":"Montenegrin","catch_phrase":"Monitored contextually-based ability"},
	{"id":65,"movie_title":"Jamaica Inn","language":"English","catch_phrase":"Versatile logistical orchestration"},
	{"id":66,"movie_title":"Smoking/No Smoking","language":"Dzongkha","catch_phrase":"Stand-alone systematic hardware"},
	{"id":67,"movie_title":"Ring of Terror","language":"Malagasy","catch_phrase":"Multi-tiered regional flexibility"},
	{"id":68,"movie_title":"Bunny Lake Is Missing","language":"Tajik","catch_phrase":"Ergonomic actuating frame"},
	{"id":69,"movie_title":"Brothers McMullen, The","language":"Maltese","catch_phrase":"Organized uniform methodology"},
	{"id":70,"movie_title":"Cult of the Cobra","language":"Portuguese","catch_phrase":"Digitized system-worthy workforce"},
	{"id":71,"movie_title":"Scream of Fear (a.k.a. Taste of Fear)","language":"Albanian","catch_phrase":"Monitored heuristic service-desk"},
	{"id":72,"movie_title":"Shottas","language":"Georgian","catch_phrase":"Right-sized national flexibility"},
	{"id":73,"movie_title":"Astronaut's Wife, The","language":"Greek","catch_phrase":"Distributed scalable definition"},
	{"id":74,"movie_title":"Factory Girl","language":"Tetum","catch_phrase":"Self-enabling contextually-based challenge"},
	{"id":75,"movie_title":"If....","language":"Oriya","catch_phrase":"Open-source zero defect migration"},
	{"id":76,"movie_title":"Turin Horse, The (A Torin??i l??)","language":"Ndebele","catch_phrase":"Enhanced zero tolerance methodology"},
	{"id":77,"movie_title":"Traces of Red","language":"Oriya","catch_phrase":"Visionary optimizing forecast"},
	{"id":78,"movie_title":"Spider Baby or, The Maddest Story Ever Told (Spider Baby)","language":"Amharic","catch_phrase":"Assimilated background function"},
	{"id":79,"movie_title":"Drums Along the Mohawk","language":"Ndebele","catch_phrase":"Exclusive scalable task-force"},
	{"id":80,"movie_title":"Breakout","language":"Armenian","catch_phrase":"Phased clear-thinking interface"},
	{"id":81,"movie_title":"Good, the Bad and the Ugly, The (Buono, il brutto, il cattivo, Il)","language":"Pashto","catch_phrase":"Synergized asymmetric Graphical User Interface"},
	{"id":82,"movie_title":"Harold & Kumar Escape from Guantanamo Bay","language":"Latvian","catch_phrase":"Robust zero defect contingency"},
	{"id":83,"movie_title":"Either Way (?? annan veg)","language":"Sotho","catch_phrase":"User-centric tangible matrix"},
	{"id":84,"movie_title":"Cowboys, The","language":"Northern Sotho","catch_phrase":"Polarised local standardization"},
	{"id":85,"movie_title":"Crossing, The","language":"Persian","catch_phrase":"Enterprise-wide 24 hour algorithm"},
	{"id":86,"movie_title":"Charlie Chan's Murder Cruise","language":"Spanish","catch_phrase":"Seamless well-modulated product"},
	{"id":87,"movie_title":"Who Am I? (Wo shi shei)","language":"Tswana","catch_phrase":"Stand-alone 4th generation attitude"},
	{"id":88,"movie_title":"Peanut Butter Solution, The","language":"Aymara","catch_phrase":"Open-architected content-based framework"},
	{"id":89,"movie_title":"Low Down Dirty Shame, A","language":"Danish","catch_phrase":"Seamless analyzing hierarchy"},
	{"id":90,"movie_title":"Like Water","language":"Kazakh","catch_phrase":"Customer-focused encompassing support"},
	{"id":91,"movie_title":"Toi et Moi","language":"Polish","catch_phrase":"Expanded empowering Graphic Interface"},
	{"id":92,"movie_title":"The Invisible Boy","language":"Kyrgyz","catch_phrase":"Networked optimizing concept"},
	{"id":93,"movie_title":"Gandhi","language":"Tswana","catch_phrase":"Versatile holistic knowledge user"},
	{"id":94,"movie_title":"Blonde Ambition","language":"Swati","catch_phrase":"Seamless systematic attitude"},
	{"id":95,"movie_title":"New York in the 50's","language":"Icelandic","catch_phrase":"Vision-oriented neutral utilisation"},
	{"id":96,"movie_title":"Vernon, Florida","language":"Telugu","catch_phrase":"Monitored multimedia policy"},
	{"id":97,"movie_title":"Vincent Wants to Sea (Vincent will meer)","language":"Telugu","catch_phrase":"Cross-platform needs-based functionalities"},
	{"id":98,"movie_title":"5,000 Fingers of Dr. T, The","language":"Malay","catch_phrase":"Self-enabling multi-tasking intranet"},
	{"id":99,"movie_title":"Bachelor, The","language":"Dutch","catch_phrase":"User-friendly modular workforce"},
	{"id":100,"movie_title":"Kevin Hart: Seriously Funny","language":"M??ori","catch_phrase":"Implemented fresh-thinking analyzer"},
	{"id":101,"movie_title":"Katatsumori","language":"Burmese","catch_phrase":"Horizontal asymmetric interface"},
	{"id":102,"movie_title":"BASEketball","language":"Lithuanian","catch_phrase":"Proactive multi-state access"},
	{"id":103,"movie_title":"Death In Love","language":"Dutch","catch_phrase":"Automated human-resource policy"},
	{"id":104,"movie_title":"Nothing to Lose (a.k.a. Ten Benny)","language":"Kurdish","catch_phrase":"Realigned high-level secured line"},
	{"id":105,"movie_title":"Song of Freedom","language":"Norwegian","catch_phrase":"Open-architected dynamic focus group"},
	{"id":106,"movie_title":"We Still Kill the Old Way","language":"Bosnian","catch_phrase":"Cross-platform global Graphical User Interface"},
	{"id":107,"movie_title":"Pi","language":"German","catch_phrase":"Sharable tangible workforce"},
	{"id":108,"movie_title":"Zigeunerweisen (Tsigoineruwaizen)","language":"Afrikaans","catch_phrase":"Upgradable 5th generation monitoring"},
	{"id":109,"movie_title":"Trumbo","language":"Assamese","catch_phrase":"Managed tangible analyzer"},
	{"id":110,"movie_title":"??sa-Nisse - W??lkom to Knohult","language":"Gagauz","catch_phrase":"Up-sized radical portal"},
	{"id":111,"movie_title":"May in the Summer","language":"Kannada","catch_phrase":"Enterprise-wide optimizing installation"},
	{"id":112,"movie_title":"House on Haunted Hill","language":"Hiri Motu","catch_phrase":"Networked 4th generation groupware"},
	{"id":113,"movie_title":"Day the Earth Caught Fire, The","language":"Malayalam","catch_phrase":"Pre-emptive impactful protocol"},
	{"id":114,"movie_title":"Vision (Vision - Aus dem Leben der Hildegard von Bingen)","language":"Assamese","catch_phrase":"Stand-alone static knowledge user"},
	{"id":115,"movie_title":"Damien: Omen II","language":"Czech","catch_phrase":"Organic real-time extranet"},
	{"id":116,"movie_title":"Jack-Jack Attack","language":"Northern Sotho","catch_phrase":"Synergized explicit instruction set"},
	{"id":117,"movie_title":"Die, Mommie, Die","language":"Bengali","catch_phrase":"Down-sized tangible artificial intelligence"},
	{"id":118,"movie_title":"Simon Sez","language":"Dutch","catch_phrase":"Inverse context-sensitive flexibility"},
	{"id":119,"movie_title":"Darling","language":"Swati","catch_phrase":"Vision-oriented multi-state knowledge base"},
	{"id":120,"movie_title":"Bertie and Elizabeth","language":"Bosnian","catch_phrase":"Phased zero defect orchestration"},
	{"id":121,"movie_title":"The Concert for Bangladesh","language":"Dhivehi","catch_phrase":"User-centric demand-driven definition"},
	{"id":122,"movie_title":"Agnes Browne","language":"Tetum","catch_phrase":"Adaptive heuristic circuit"},
	{"id":123,"movie_title":"Loners (Samot??ri)","language":"Greek","catch_phrase":"Grass-roots optimal solution"},
	{"id":124,"movie_title":"Student, The (El estudiante)","language":"Afrikaans","catch_phrase":"Visionary client-server analyzer"},
	{"id":125,"movie_title":"Mother of Mine (??ideist?? parhain)","language":"Telugu","catch_phrase":"Operative object-oriented time-frame"},
	{"id":126,"movie_title":"Swedish Love Story, A (K??rlekshistoria, En)","language":"Filipino","catch_phrase":"Visionary tangible benchmark"},
	{"id":127,"movie_title":"Broadway Melody, The","language":"Maltese","catch_phrase":"Cross-group needs-based knowledge base"},
	{"id":128,"movie_title":"Man of Marble (Czlowiek z Marmuru)","language":"Swati","catch_phrase":"User-centric explicit budgetary management"},
	{"id":129,"movie_title":"How Tasty Was My Little Frenchman (Como Era Gostoso o Meu Franc??s)","language":"Tamil","catch_phrase":"Enterprise-wide analyzing service-desk"},
	{"id":130,"movie_title":"The Nativity","language":"Romanian","catch_phrase":"Devolved exuding leverage"},
	{"id":131,"movie_title":"Old Yeller","language":"Assamese","catch_phrase":"Fully-configurable next generation toolset"},
	{"id":132,"movie_title":"Sitcom","language":"Macedonian","catch_phrase":"Stand-alone impactful time-frame"},
	{"id":133,"movie_title":"Gas, Food, Lodging","language":"Haitian Creole","catch_phrase":"Centralized maximized structure"},
	{"id":134,"movie_title":"Ghost Writer, The","language":"Portuguese","catch_phrase":"Upgradable systematic time-frame"},
	{"id":135,"movie_title":"Armed and Dangerous","language":"Irish Gaelic","catch_phrase":"Focused 5th generation adapter"},
	{"id":136,"movie_title":"This Ain't California","language":"Tajik","catch_phrase":"Triple-buffered fault-tolerant infrastructure"},
	{"id":137,"movie_title":"Soft Fruit","language":"Afrikaans","catch_phrase":"Re-contextualized bifurcated policy"},
	{"id":138,"movie_title":"Chechahcos, The","language":"Portuguese","catch_phrase":"Synchronised fresh-thinking solution"},
	{"id":139,"movie_title":"Cape Fear","language":"Dhivehi","catch_phrase":"Face to face content-based focus group"},
	{"id":140,"movie_title":"Man on High Heels","language":"Armenian","catch_phrase":"Intuitive high-level product"},
	{"id":141,"movie_title":"Eklavya: The Royal Guard","language":"Quechua","catch_phrase":"Multi-lateral leading edge access"},
	{"id":142,"movie_title":"Birds, The","language":"Latvian","catch_phrase":"Team-oriented leading edge infrastructure"},
	{"id":143,"movie_title":"It Is Written in the Stars, Inspector Palmu (T??hdet kertovat, komisario Palmu)","language":"Croatian","catch_phrase":"Fundamental incremental architecture"},
	{"id":144,"movie_title":"Regeneration","language":"Polish","catch_phrase":"Inverse upward-trending throughput"},
	{"id":145,"movie_title":"Godard's Passion (Passion)","language":"Haitian Creole","catch_phrase":"Managed 24/7 benchmark"},
	{"id":146,"movie_title":"Across the Bridge","language":"Montenegrin","catch_phrase":"Synergistic asymmetric moratorium"},
	{"id":147,"movie_title":"A Pistol For Ringo","language":"Marathi","catch_phrase":"Digitized multi-state matrix"},
	{"id":148,"movie_title":"Dodgeball: A True Underdog Story","language":"Khmer","catch_phrase":"Proactive radical attitude"},
	{"id":149,"movie_title":"Rio Sex Comedy","language":"Burmese","catch_phrase":"Compatible grid-enabled synergy"},
	{"id":150,"movie_title":"Face of a Fugitive","language":"Yiddish","catch_phrase":"Organic context-sensitive pricing structure"},
	{"id":151,"movie_title":"Enon opetukset","language":"Maltese","catch_phrase":"Integrated even-keeled adapter"},
	{"id":152,"movie_title":"Foreign Land (Terra Estrangeira)","language":"Afrikaans","catch_phrase":"Total national open system"},
	{"id":153,"movie_title":"Elektra Luxx","language":"M??ori","catch_phrase":"User-centric systematic software"},
	{"id":154,"movie_title":"Jay-Z: Made in America","language":"Japanese","catch_phrase":"Enterprise-wide discrete definition"},
	{"id":155,"movie_title":"Within Our Gates","language":"Nepali","catch_phrase":"Balanced object-oriented neural-net"},
	{"id":156,"movie_title":"To Wong Foo, Thanks for Everything! Julie Newmar","language":"Persian","catch_phrase":"Focused executive framework"},
	{"id":157,"movie_title":"Bugs Bunny's 3rd Movie: 1001 Rabbit Tales","language":"Somali","catch_phrase":"Robust motivating internet solution"},
	{"id":158,"movie_title":"Adrift (Choi Voi)","language":"Bengali","catch_phrase":"Polarised coherent website"},
	{"id":159,"movie_title":"Paradise: Faith (Paradies: Glaube)","language":"Finnish","catch_phrase":"Ameliorated exuding attitude"},
	{"id":160,"movie_title":"Poison Ivy: New Seduction","language":"Lithuanian","catch_phrase":"Progressive upward-trending software"},
	{"id":161,"movie_title":"Lookin' to Get Out","language":"Tamil","catch_phrase":"Inverse cohesive approach"},
	{"id":162,"movie_title":"Matriarch, The (Lieksa!)","language":"Swedish","catch_phrase":"Advanced real-time software"},
	{"id":163,"movie_title":"Paramore Live, the Final Riot!","language":"Kurdish","catch_phrase":"Configurable national instruction set"},
	{"id":164,"movie_title":"Pixote","language":"Sotho","catch_phrase":"Re-contextualized full-range pricing structure"},
	{"id":165,"movie_title":"Coyote Ugly","language":"Czech","catch_phrase":"Managed 5th generation algorithm"},
	{"id":166,"movie_title":"Elena","language":"Malay","catch_phrase":"Programmable radical access"},
	{"id":167,"movie_title":"Mother's Courage: Talking Back to Autism, A","language":"Bosnian","catch_phrase":"Profit-focused fault-tolerant toolset"},
	{"id":168,"movie_title":"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb","language":"Sotho","catch_phrase":"Stand-alone transitional hierarchy"},
	{"id":169,"movie_title":"The Hanoi Hilton","language":"Assamese","catch_phrase":"Automated upward-trending encryption"},
	{"id":170,"movie_title":"They Came Back (Les Revenants)","language":"Spanish","catch_phrase":"Optional actuating analyzer"},
	{"id":171,"movie_title":"Teenage Mutant Ninja Turtles II: The Secret of the Ooze","language":"Gagauz","catch_phrase":"Polarised context-sensitive knowledge user"},
	{"id":172,"movie_title":"Monster House","language":"Quechua","catch_phrase":"Polarised 4th generation info-mediaries"},
	{"id":173,"movie_title":"Humpday","language":"Georgian","catch_phrase":"Object-based grid-enabled solution"},
	{"id":174,"movie_title":"'Twas the Night Before Christmas","language":"Tok Pisin","catch_phrase":"Exclusive secondary productivity"},
	{"id":175,"movie_title":"Score, The","language":"Sotho","catch_phrase":"Intuitive radical workforce"},
	{"id":176,"movie_title":"20 Dates","language":"Swati","catch_phrase":"Universal real-time capacity"},
	{"id":177,"movie_title":"Neil Young: Heart of Gold","language":"Norwegian","catch_phrase":"Intuitive static middleware"},
	{"id":178,"movie_title":"Game, The","language":"Belarusian","catch_phrase":"Multi-channelled 6th generation frame"},
	{"id":179,"movie_title":"Breakfast at Tiffany's","language":"Armenian","catch_phrase":"Customizable tertiary service-desk"},
	{"id":180,"movie_title":"Devil's Chair, The","language":"Malayalam","catch_phrase":"Quality-focused local ability"},
	{"id":181,"movie_title":"Cottage, The","language":"Amharic","catch_phrase":"Progressive client-driven ability"},
	{"id":182,"movie_title":"Everyone Says I Love You","language":"Romanian","catch_phrase":"Horizontal responsive structure"},
	{"id":183,"movie_title":"Happiness","language":"Irish Gaelic","catch_phrase":"Face to face 3rd generation task-force"},
	{"id":184,"movie_title":"When Marnie Was There","language":"Dzongkha","catch_phrase":"Reverse-engineered system-worthy paradigm"},
	{"id":185,"movie_title":"This Is Where I Leave You","language":"Gagauz","catch_phrase":"Self-enabling attitude-oriented success"},
	{"id":186,"movie_title":"Short Cuts","language":"Somali","catch_phrase":"Realigned disintermediate analyzer"},
	{"id":187,"movie_title":"Home Movie","language":"Amharic","catch_phrase":"Universal 24 hour flexibility"},
	{"id":188,"movie_title":"Criminal Justice","language":"Moldovan","catch_phrase":"Profound responsive intranet"},
	{"id":189,"movie_title":"Mistress","language":"Albanian","catch_phrase":"Distributed reciprocal focus group"},
	{"id":190,"movie_title":"Far","language":"Punjabi","catch_phrase":"Mandatory zero defect capability"},
	{"id":191,"movie_title":"Book of Life, The","language":"Tok Pisin","catch_phrase":"User-centric motivating contingency"},
	{"id":192,"movie_title":"TV Set, The","language":"Burmese","catch_phrase":"Devolved 6th generation installation"},
	{"id":193,"movie_title":"Real Men","language":"Afrikaans","catch_phrase":"Configurable actuating infrastructure"},
	{"id":194,"movie_title":"The Wild World of Lydia Lunch","language":"Guaran??","catch_phrase":"User-centric systemic migration"},
	{"id":195,"movie_title":"Musketeers of Pig Alley, The","language":"Khmer","catch_phrase":"Integrated cohesive application"},
	{"id":196,"movie_title":"Geronimo","language":"Zulu","catch_phrase":"Virtual methodical ability"},
	{"id":197,"movie_title":"Dead Tired (Grosse Fatigue)","language":"Kazakh","catch_phrase":"Networked asynchronous pricing structure"},
	{"id":198,"movie_title":"Sons of Katie Elder","language":"Croatian","catch_phrase":"Synergistic clear-thinking groupware"},
	{"id":199,"movie_title":"Adventures of Captain Marvel","language":"Danish","catch_phrase":"Universal stable methodology"},
	{"id":200,"movie_title":"Iron Mask, The","language":"Italian","catch_phrase":"User-centric analyzing forecast"}]
},{}],3:[function(require,module,exports){
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

},{"./controller/movie.js":1}]},{},[3]);
