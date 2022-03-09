const max = async (a, b) => {
  await timeout(2000);
  return a > b ? a : b;
};

function timeout(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

async function inc(a) {
  return new Promise((resolve) => timeout(3000).then(() => resolve(a + 1))); 
}

const sum = async function (a, b) {
  await timeout(2000);
  return a + b;
};


const avg = async (a, b) => {
  await timeout(2000);
  const s = await sum(a, b);
  return s / 2;
};

const obj = {
  name: "Marcus Aurelius",
  async split(sep = " ") {
    await timeout(2000);

    return this.name.split(sep);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static async of(name) {
    await timeout(2000);
    return new Person(name);
  }

  async split(sep = " ") {
    await timeout(2000);

    return this.name.split(sep);
  }
}

const person = new Person("Marcus Aurelius");

inc(5).then((value) => console.log(value))