(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const products = require("../data/products");

const getAll = ({ id, name, description, price } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(products);

    if (id) {
      result = result.filter((item) => item.id === id);
    }

    if (name) {
      result = result.filter((item) => item.name === name);
    }

    if (description) {
      result = result.filter((item) => item.description === description);
    }

    if (price) {
      result = result.filter((item) => item.price === Number(price));
    }

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const product = products.find((product) => product.id === id);

    if (product) {
      resolve({ code: 200, data: product });
    } else {
      resolve({
        code: 404,
        data: { message: `No product found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};

},{"../data/products":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"first_name":"Shawna","last_name":"Raffels","email":"sraffels0@ucla.edu","gender":"Female","ip_address":"221.66.61.155","university":"Kwara State University ","city":"Elele","country":"Nigeria","zip":"Way"},
  {"id":2,"first_name":"Alexis","last_name":"Rennels","email":"arennels1@blogtalkradio.com","gender":"Female","ip_address":"235.151.146.24","university":"Royal Danish School of Educational Sciences","city":"København","country":"Denmark","zip":"Drive"},
  {"id":3,"first_name":"Bryant","last_name":"Bartalucci","email":"bbartalucci2@hp.com","gender":"Male","ip_address":"220.55.163.109","university":"Ahvaz University of Medical Sciences","city":"Ārān Bīdgol","country":"Iran","zip":"Trail"},
  {"id":4,"first_name":"Keelby","last_name":"Balsdon","email":"kbalsdon3@ebay.co.uk","gender":"Male","ip_address":"68.85.248.139","university":"Politeknik Negeri Jakarta","city":"Mandalasari","country":"Indonesia","zip":"Avenue"},
  {"id":5,"first_name":"Beatrix","last_name":"Reolfo","email":"breolfo4@jalbum.net","gender":"Female","ip_address":"72.180.3.98","university":"Shenzhen University","city":"Xihe","country":"China","zip":"Trail"},
  {"id":6,"first_name":"Pauly","last_name":"Sobey","email":"psobey5@typepad.com","gender":"Female","ip_address":"2.159.253.91","university":"Nanjing University of Traditional Chinese Medicine","city":"Potou","country":"China","zip":"Park"},
  {"id":7,"first_name":"Jessamine","last_name":"Willmett","email":"jwillmett6@w3.org","gender":"Female","ip_address":"62.48.120.206","university":"Kostanai State University","city":"Kyzylzhar","country":"Kazakhstan","zip":"Drive"},
  {"id":8,"first_name":"Sybilla","last_name":"Coope","email":"scoope7@hud.gov","gender":"Female","ip_address":"255.198.43.246","university":"University of Fine Arts Belgrade","city":"Boljevac","country":"Serbia","zip":"Pass"},
  {"id":9,"first_name":"Swen","last_name":"Jeffry","email":"sjeffry8@bluehost.com","gender":"Male","ip_address":"204.240.106.63","university":"Kardan University","city":"‘Alāqahdārī Kirān wa Munjān","country":"Afghanistan","zip":"Crossing"},
  {"id":10,"first_name":"Crichton","last_name":"Cobbledick","email":"ccobbledick9@salon.com","gender":"Male","ip_address":"232.105.7.9","university":"Universidad Metropolitana de Honduras","city":"Las Tejeras","country":"Honduras","zip":"Center"},
  {"id":11,"first_name":"Lanny","last_name":"Verlander","email":"lverlandera@mozilla.org","gender":"Male","ip_address":"27.35.3.109","university":"International Buddhist College","city":"Sao Hai","country":"Thailand","zip":"Place"},
  {"id":12,"first_name":"Nedi","last_name":"Blunsom","email":"nblunsomb@theguardian.com","gender":"Female","ip_address":"74.107.22.63","university":"Omsk State University","city":"Shchëkino","country":"Russia","zip":"Place"},
  {"id":13,"first_name":"Martha","last_name":"Coolbear","email":"mcoolbearc@irs.gov","gender":"Bigender","ip_address":"62.240.109.111","university":"Universitas Negeri Gorontalo","city":"Cukanguncal","country":"Indonesia","zip":"Junction"},
  {"id":14,"first_name":"Irma","last_name":"Grogor","email":"igrogord@cdc.gov","gender":"Genderfluid","ip_address":"230.94.105.89","university":"Universidad de San Andres","city":"Santa Ana","country":"Argentina","zip":"Circle"},
  {"id":15,"first_name":"Maryl","last_name":"Robelow","email":"mrobelowe@ftc.gov","gender":"Genderfluid","ip_address":"223.156.9.12","university":"University of the Immaculate Conception","city":"San Isidro","country":"Philippines","zip":"Court"},
  {"id":16,"first_name":"Benjamen","last_name":"McKnockiter","email":"bmcknockiterf@dagondesign.com","gender":"Male","ip_address":"207.204.171.185","university":"National College of Ireland","city":"Gweedore","country":"Ireland","zip":"Trail"},
  {"id":17,"first_name":"Erek","last_name":"Brave","email":"ebraveg@wikimedia.org","gender":"Male","ip_address":"181.149.220.208","university":"Universitas Muria Kudus","city":"Sukamaju","country":"Indonesia","zip":"Crossing"},
  {"id":18,"first_name":"Eward","last_name":"Demetr","email":"edemetrh@wikispaces.com","gender":"Male","ip_address":"239.36.210.155","university":"Assiut University","city":"Hurghada","country":"Egypt","zip":"Street"},
  {"id":19,"first_name":"Margi","last_name":"Rymer","email":"mrymeri@mozilla.com","gender":"Female","ip_address":"38.88.252.243","university":"Davao Doctors College","city":"Kabankalan","country":"Philippines","zip":"Circle"},
  {"id":20,"first_name":"June","last_name":"Cowlin","email":"jcowlinj@vimeo.com","gender":"Female","ip_address":"203.173.131.82","university":"Usmanu Danfodiyo University Sokoto","city":"Damasak","country":"Nigeria","zip":"Park"},
  {"id":21,"first_name":"Pedro","last_name":"Bentke","email":"pbentkek@yale.edu","gender":"Male","ip_address":"244.210.212.183","university":"University of Santo Tomas","city":"Lumbang","country":"Philippines","zip":"Point"},
  {"id":22,"first_name":"Linc","last_name":"Raiker","email":"lraikerl@arstechnica.com","gender":"Male","ip_address":"124.209.209.210","university":"Xi'an International Studies University","city":"Xingxi","country":"China","zip":"Center"},
  {"id":23,"first_name":"Baryram","last_name":"Colvie","email":"bcolviem@hibu.com","gender":"Male","ip_address":"77.60.120.196","university":"Universidade Catolica Portuguesa","city":"Gondar","country":"Portugal","zip":"Parkway"},
  {"id":24,"first_name":"Shayne","last_name":"Balsdone","email":"sbalsdonen@blogger.com","gender":"Male","ip_address":"197.191.87.179","university":"Shanghai Ocean University","city":"Liaonan","country":"China","zip":"Drive"},
  {"id":25,"first_name":"Sibyl","last_name":"Denness","email":"sdennesso@github.io","gender":"Female","ip_address":"84.180.28.94","university":"Tarlac State University","city":"Carriedo","country":"Philippines","zip":"Pass"},
  {"id":26,"first_name":"Wallie","last_name":"Scamp","email":"wscampp@typepad.com","gender":"Non-binary","ip_address":"177.47.109.226","university":"Université Charles-de-Gaulle (Lille III)","city":"Mundolsheim","country":"France","zip":"Terrace"},
  {"id":27,"first_name":"Cy","last_name":"Philpin","email":"cphilpinq@joomla.org","gender":"Male","ip_address":"59.136.251.165","university":"Universidade Moderna de Lisboa","city":"Sernancelhe","country":"Portugal","zip":"Way"},
  {"id":28,"first_name":"Enrico","last_name":"Roddick","email":"eroddickr@networksolutions.com","gender":"Male","ip_address":"99.203.229.57","university":"Shanxi University","city":"Mashan","country":"China","zip":"Lane"},
  {"id":29,"first_name":"Geri","last_name":"Search","email":"gsearchs@list-manage.com","gender":"Male","ip_address":"17.3.145.192","university":"Beijing University of Science and Technology","city":"Huliao","country":"China","zip":"Lane"},
  {"id":30,"first_name":"Reta","last_name":"Piechnik","email":"rpiechnikt@bloglovin.com","gender":"Polygender","ip_address":"53.94.190.186","university":"Luxun Academy of Fine Art","city":"Xinghai","country":"China","zip":"Plaza"},
  {"id":31,"first_name":"Birk","last_name":"Margery","email":"bmargeryu@microsoft.com","gender":"Male","ip_address":"251.85.51.13","university":"Universidad Central","city":"Pejibaye","country":"Costa Rica","zip":"Pass"},
  {"id":32,"first_name":"Adria","last_name":"Gaish","email":"agaishv@businesswire.com","gender":"Female","ip_address":"25.239.126.167","university":"Nankai University","city":"Bayan Bulag","country":"China","zip":"Circle"},
  {"id":33,"first_name":"Lamar","last_name":"Lutwidge","email":"llutwidgew@tripod.com","gender":"Male","ip_address":"231.141.153.31","university":"Weber State University","city":"Orlando","country":"United States","zip":"Crossing"},
  {"id":34,"first_name":"Taylor","last_name":"Brissard","email":"tbrissardx@ow.ly","gender":"Male","ip_address":"157.72.254.192","university":"University of Shkodra \"Luigj Gurakuqi\"","city":"Fier","country":"Albania","zip":"Point"},
  {"id":35,"first_name":"Samuele","last_name":"Ewebank","email":"sewebanky@phpbb.com","gender":"Male","ip_address":"177.253.192.113","university":"Université de la Polynésie Française","city":"Punaauia","country":"French Polynesia","zip":"Court"},
  {"id":36,"first_name":"Olympe","last_name":"Daggett","email":"odaggettz@nytimes.com","gender":"Female","ip_address":"59.160.250.241","university":"Tianjin Academy of Fine Art","city":"Anping","country":"China","zip":"Way"},
  {"id":37,"first_name":"Tait","last_name":"Bonson","email":"tbonson10@businessinsider.com","gender":"Male","ip_address":"117.38.92.53","university":"Zagreb School of Economics and Management","city":"Starigrad","country":"Croatia","zip":"Avenue"},
  {"id":38,"first_name":"Loutitia","last_name":"McRonald","email":"lmcronald11@posterous.com","gender":"Female","ip_address":"194.250.26.165","university":"Universidad Latina de Panamá","city":"Los Santos","country":"Panama","zip":"Point"},
  {"id":39,"first_name":"Leonie","last_name":"Ivantsov","email":"livantsov12@github.com","gender":"Female","ip_address":"162.112.171.204","university":"Bellarmine College","city":"Baton Rouge","country":"United States","zip":"Street"},
  {"id":40,"first_name":"Don","last_name":"Fanti","email":"dfanti13@statcounter.com","gender":"Male","ip_address":"159.195.99.56","university":"National University of Food Technologies","city":"Tyachiv","country":"Ukraine","zip":"Parkway"},
  {"id":41,"first_name":"Emanuele","last_name":"Riddock","email":"eriddock14@google.com.br","gender":"Male","ip_address":"250.32.220.133","university":"University of Southern Mindanao","city":"Minanga Norte","country":"Philippines","zip":"Center"},
  {"id":42,"first_name":"Piotr","last_name":"Squeers","email":"psqueers15@seesaa.net","gender":"Male","ip_address":"141.32.169.169","university":"Université de Bamako","city":"Banamba","country":"Mali","zip":"Street"},
  {"id":43,"first_name":"Charla","last_name":"Thorius","email":"cthorius16@oracle.com","gender":"Female","ip_address":"234.126.165.37","university":"Kazak American University","city":"Baykonyr","country":"Kazakhstan","zip":"Point"},
  {"id":44,"first_name":"Spencer","last_name":"Worms","email":"sworms17@shareasale.com","gender":"Male","ip_address":"231.184.129.29","university":"Nortre Dame Seishin University","city":"Tōno","country":"Japan","zip":"Crossing"},
  {"id":45,"first_name":"Dodi","last_name":"Greenhough","email":"dgreenhough18@purevolume.com","gender":"Female","ip_address":"41.177.116.227","university":"Universidad de Granada","city":"Malaga","country":"Spain","zip":"Avenue"},
  {"id":46,"first_name":"Benton","last_name":"Ucchino","email":"bucchino19@indiegogo.com","gender":"Male","ip_address":"239.199.184.166","university":"Universidade Estadual do Oeste do Paraná","city":"Nova Petrópolis","country":"Brazil","zip":"Court"},
  {"id":47,"first_name":"Mead","last_name":"Piddle","email":"mpiddle1a@ucsd.edu","gender":"Male","ip_address":"179.164.133.164","university":"Omar Al-Mukhtar University","city":"Tagiura","country":"Libya","zip":"Avenue"},
  {"id":48,"first_name":"Florian","last_name":"Ninotti","email":"fninotti1b@constantcontact.com","gender":"Male","ip_address":"152.63.140.139","university":"Inner Mongolia Polytechnic University","city":"Zhongluotan","country":"China","zip":"Alley"},
  {"id":49,"first_name":"Allyn","last_name":"De Mars","email":"ademars1c@weather.com","gender":"Female","ip_address":"34.115.109.238","university":"Beijing International Studies University","city":"Wenbi","country":"China","zip":"Road"},
  {"id":50,"first_name":"Hurley","last_name":"Pexton","email":"hpexton1d@tmall.com","gender":"Male","ip_address":"202.119.62.243","university":"Rafsanjan University of Medical Sciences","city":"Khonj","country":"Iran","zip":"Center"},
  {"id":51,"first_name":"Chadwick","last_name":"Troppmann","email":"ctroppmann1e@bloglovin.com","gender":"Agender","ip_address":"165.194.107.239","university":"Yantai University","city":"Sujiatun","country":"China","zip":"Junction"},
  {"id":52,"first_name":"Allan","last_name":"Baselli","email":"abaselli1f@ifeng.com","gender":"Male","ip_address":"26.104.129.245","university":"Hebei University of Economics and Trade","city":"Jinchang","country":"China","zip":"Park"},
  {"id":53,"first_name":"Emogene","last_name":"Bleasdale","email":"ebleasdale1g@exblog.jp","gender":"Female","ip_address":"69.193.244.255","university":"Ramkhamhaeng University","city":"Phanom Phrai","country":"Thailand","zip":"Parkway"},
  {"id":54,"first_name":"Aharon","last_name":"Feaster","email":"afeaster1h@scientificamerican.com","gender":"Male","ip_address":"39.47.31.161","university":"Universidade Potiguar","city":"Coruripe","country":"Brazil","zip":"Point"},
  {"id":55,"first_name":"Tamara","last_name":"Annandale","email":"tannandale1i@ucsd.edu","gender":"Female","ip_address":"165.72.186.118","university":"School of Slavonic and East European Studies, University of London","city":"Twyford","country":"United Kingdom","zip":"Terrace"},
  {"id":56,"first_name":"Willow","last_name":"Chessell","email":"wchessell1j@businessweek.com","gender":"Female","ip_address":"160.210.180.92","university":"Ecole Centrale de Lyon","city":"Thionville","country":"France","zip":"Hill"},
  {"id":57,"first_name":"Arturo","last_name":"Merrydew","email":"amerrydew1k@umich.edu","gender":"Male","ip_address":"66.235.221.49","university":"Stockholm University","city":"Hallstahammar","country":"Sweden","zip":"Alley"},
  {"id":58,"first_name":"Rakel","last_name":"Tonbye","email":"rtonbye1l@wikipedia.org","gender":"Female","ip_address":"141.243.89.171","university":"Fudan University","city":"Taizhou","country":"China","zip":"Road"},
  {"id":59,"first_name":"Brigham","last_name":"Carek","email":"bcarek1m@squidoo.com","gender":"Male","ip_address":"224.42.245.104","university":"Universitas Mataram","city":"Jambean","country":"Indonesia","zip":"Street"},
  {"id":60,"first_name":"Antonius","last_name":"Snelgar","email":"asnelgar1n@msn.com","gender":"Male","ip_address":"143.136.123.116","university":"Lampang Vocational College   ","city":"Phanom Phrai","country":"Thailand","zip":"Alley"},
  {"id":61,"first_name":"Alexei","last_name":"Mazillius","email":"amazillius1o@indiatimes.com","gender":"Male","ip_address":"146.152.114.207","university":"Ibn Sina National College for Medical Studies ","city":"Al Wajh","country":"Saudi Arabia","zip":"Junction"},
  {"id":62,"first_name":"Torrin","last_name":"Quinet","email":"tquinet1p@opera.com","gender":"Male","ip_address":"186.167.78.84","university":"Prague International University","city":"Bukovec","country":"Czech Republic","zip":"Terrace"},
  {"id":63,"first_name":"Teodorico","last_name":"Wark","email":"twark1q@bloglines.com","gender":"Male","ip_address":"193.190.196.87","university":"Universitas Kediri","city":"Bantar Tengah","country":"Indonesia","zip":"Parkway"},
  {"id":64,"first_name":"Claire","last_name":"Verissimo","email":"cverissimo1r@hugedomains.com","gender":"Male","ip_address":"126.4.209.171","university":"Higher School o Business in Tarnow","city":"Lubień Kujawski","country":"Poland","zip":"Street"},
  {"id":65,"first_name":"Hendrika","last_name":"Maevela","email":"hmaevela1s@nih.gov","gender":"Female","ip_address":"148.41.201.173","university":"Université de Fianarantsoa","city":"Ambohitseheno","country":"Madagascar","zip":"Road"},
  {"id":66,"first_name":"Wendel","last_name":"Varndall","email":"wvarndall1t@skyrock.com","gender":"Male","ip_address":"170.217.225.124","university":"Polytechnic University of the Philippines","city":"Jasaan","country":"Philippines","zip":"Way"},
  {"id":67,"first_name":"Miles","last_name":"Zellick","email":"mzellick1u@intel.com","gender":"Male","ip_address":"61.216.234.216","university":"Liceo de Cagayan University","city":"Cabalawan","country":"Philippines","zip":"Crossing"},
  {"id":68,"first_name":"Birch","last_name":"Caulder","email":"bcaulder1v@uiuc.edu","gender":"Male","ip_address":"115.145.191.107","university":"Lithunian University of Agriculture","city":"Akademija (Kaunas)","country":"Lithuania","zip":"Parkway"},
  {"id":69,"first_name":"Britney","last_name":"Sussams","email":"bsussams1w@adobe.com","gender":"Female","ip_address":"242.33.82.23","university":"Russian State Geological Prospecting University ","city":"Tomari","country":"Russia","zip":"Pass"},
  {"id":70,"first_name":"Tammie","last_name":"Tweddle","email":"ttweddle1x@hibu.com","gender":"Male","ip_address":"214.203.2.88","university":"Gnesins Russian Academy of Music","city":"Mtsensk","country":"Russia","zip":"Center"},
  {"id":71,"first_name":"Terrill","last_name":"Marchelli","email":"tmarchelli1y@prnewswire.com","gender":"Male","ip_address":"131.122.197.101","university":"Malmö University College","city":"Göteborg","country":"Sweden","zip":"Street"},
  {"id":72,"first_name":"Hurleigh","last_name":"McCarrell","email":"hmccarrell1z@nifty.com","gender":"Male","ip_address":"12.62.92.131","university":"Kyoto Gakuen University","city":"Klokot","country":"Kosovo","zip":"Hill"},
  {"id":73,"first_name":"Lindy","last_name":"Clare","email":"lclare20@squidoo.com","gender":"Female","ip_address":"206.118.193.159","university":"Kampala University","city":"Paidha","country":"Uganda","zip":"Center"},
  {"id":74,"first_name":"Chick","last_name":"Elcom","email":"celcom21@tuttocitta.it","gender":"Male","ip_address":"43.172.67.85","university":"Kharkiv National University","city":"Koreiz","country":"Ukraine","zip":"Plaza"},
  {"id":75,"first_name":"Barney","last_name":"Rudd","email":"brudd22@columbia.edu","gender":"Male","ip_address":"42.202.198.77","university":"Universidade da Amazônia","city":"Abaeté","country":"Brazil","zip":"Place"},
  {"id":76,"first_name":"Kevyn","last_name":"Sirrell","email":"ksirrell23@lycos.com","gender":"Female","ip_address":"201.52.78.67","university":"Stie Perbanas Surabaya","city":"Sidaurip","country":"Indonesia","zip":"Hill"},
  {"id":77,"first_name":"Brant","last_name":"Derrington","email":"bderrington24@behance.net","gender":"Male","ip_address":"190.22.73.201","university":"American University of Tirana","city":"Cukalat","country":"Albania","zip":"Way"},
  {"id":78,"first_name":"Kathye","last_name":"Snalham","email":"ksnalham25@weather.com","gender":"Genderqueer","ip_address":"99.53.5.94","university":"University of Opole","city":"Żywiec","country":"Poland","zip":"Way"},
  {"id":79,"first_name":"Hughie","last_name":"Augustine","email":"haugustine26@goo.ne.jp","gender":"Male","ip_address":"84.177.46.67","university":"Dirección General de Institutos Tecnológicos","city":"Santa Rosa","country":"Mexico","zip":"Hill"},
  {"id":80,"first_name":"Katya","last_name":"Croci","email":"kcroci27@sbwire.com","gender":"Female","ip_address":"17.151.224.134","university":"University of Vaasa","city":"Luopioinen","country":"Finland","zip":"Avenue"},
  {"id":81,"first_name":"Adrian","last_name":"Paskerful","email":"apaskerful28@tuttocitta.it","gender":"Male","ip_address":"31.131.166.133","university":"El Colegio de México","city":"Chapultepec","country":"Mexico","zip":"Hill"},
  {"id":82,"first_name":"Titos","last_name":"Milverton","email":"tmilverton29@altervista.org","gender":"Male","ip_address":"210.123.94.218","university":"Institut Teknologi Telkom","city":"Lanos","country":"Indonesia","zip":"Circle"},
  {"id":83,"first_name":"Amelina","last_name":"Crut","email":"acrut2a@people.com.cn","gender":"Female","ip_address":"109.12.231.136","university":"Instituto Universitario Aeronáutico","city":"Almafuerte","country":"Argentina","zip":"Hill"},
  {"id":84,"first_name":"Aviva","last_name":"Hoovart","email":"ahoovart2b@cmu.edu","gender":"Female","ip_address":"5.149.113.196","university":"Józef Tyszkiewicz College of Business and Computer Science in Bielsko-Biala","city":"Tymbark","country":"Poland","zip":"Drive"},
  {"id":85,"first_name":"Flossy","last_name":"Cashley","email":"fcashley2c@skype.com","gender":"Female","ip_address":"161.29.21.126","university":"Anhui University of Finance and Economics","city":"Weixin","country":"China","zip":"Parkway"},
  {"id":86,"first_name":"Papageno","last_name":"Cullnean","email":"pcullnean2d@hao123.com","gender":"Male","ip_address":"243.58.251.204","university":"Université de Bangui","city":"Paoua","country":"Central African Republic","zip":"Lane"},
  {"id":87,"first_name":"Jsandye","last_name":"Woodsford","email":"jwoodsford2e@lulu.com","gender":"Female","ip_address":"14.106.146.104","university":"Music Academy \"Karol Lipinski\" in Wroclaw","city":"Chłapowo","country":"Poland","zip":"Parkway"},
  {"id":88,"first_name":"Karon","last_name":"Baggelley","email":"kbaggelley2f@yellowpages.com","gender":"Female","ip_address":"182.2.104.57","university":"Universitas Islam Sumatera Utara","city":"Panglanjan","country":"Indonesia","zip":"Point"},
  {"id":89,"first_name":"Gigi","last_name":"Tejada","email":"gtejada2g@rediff.com","gender":"Female","ip_address":"247.171.33.188","university":"Université de Bamako","city":"Ké-Macina","country":"Mali","zip":"Circle"},
  {"id":90,"first_name":"Babita","last_name":"Botger","email":"bbotger2h@arstechnica.com","gender":"Female","ip_address":"133.168.46.230","university":"St. Petersburg State Mountain Institut","city":"Svetlograd","country":"Russia","zip":"Hill"},
  {"id":91,"first_name":"Enrica","last_name":"Pauncefort","email":"epauncefort2i@umich.edu","gender":"Female","ip_address":"19.70.153.242","university":"Universidad Privada del Norte","city":"Viñac","country":"Peru","zip":"Center"},
  {"id":92,"first_name":"Hobard","last_name":"Casey","email":"hcasey2j@godaddy.com","gender":"Male","ip_address":"205.49.168.87","university":"Higher School o Business in Tarnow","city":"Boniewo","country":"Poland","zip":"Crossing"},
  {"id":93,"first_name":"Julieta","last_name":"Le Floch","email":"jlefloch2k@purevolume.com","gender":"Female","ip_address":"47.230.47.228","university":"University of Nueva Caceres","city":"Palompon","country":"Philippines","zip":"Center"},
  {"id":94,"first_name":"Flossi","last_name":"Udall","email":"fudall2l@jiathis.com","gender":"Female","ip_address":"81.21.32.253","university":"Universidad Pedagógica Nacional \"Francisco Morazán\"","city":"San Agustín","country":"Honduras","zip":"Junction"},
  {"id":95,"first_name":"Melodee","last_name":"Ullrich","email":"mullrich2m@free.fr","gender":"Female","ip_address":"235.122.50.125","university":"Ecole Nationale Vétérinaire de Nantes","city":"Cannes","country":"France","zip":"Plaza"},
  {"id":96,"first_name":"Eldin","last_name":"Villaret","email":"evillaret2n@newyorker.com","gender":"Male","ip_address":"29.79.12.3","university":"Olympia College","city":"Nusajaya","country":"Malaysia","zip":"Terrace"},
  {"id":97,"first_name":"Benedetto","last_name":"Brounfield","email":"bbrounfield2o@digg.com","gender":"Male","ip_address":"40.183.235.108","university":"Université de la Polynésie Française","city":"Afaahiti","country":"French Polynesia","zip":"Point"},
  {"id":98,"first_name":"Dave","last_name":"Shipton","email":"dshipton2p@dyndns.org","gender":"Male","ip_address":"154.102.21.212","university":"Shujitsu Women's University","city":"Ebetsu","country":"Japan","zip":"Alley"},
  {"id":99,"first_name":"Patsy","last_name":"Libbe","email":"plibbe2q@technorati.com","gender":"Female","ip_address":"79.51.127.70","university":"Stockholm University","city":"Vällingby","country":"Sweden","zip":"Pass"},
  {"id":100,"first_name":"Talbert","last_name":"Cooper","email":"tcooper2r@nytimes.com","gender":"Male","ip_address":"151.186.149.204","university":"King Mongkut's University of Technology North Bangkok","city":"Sathon","country":"Thailand","zip":"Road"}]
},{}],3:[function(require,module,exports){
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
},{"./api/products.js":1}]},{},[3]);
