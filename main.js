function fun(a = 0) {
  if (true) {
    window.sample = "deepakkumar";
  }
}

const text = null;
console.log(text);

function p() {
  let counter = 0;
  return {
    dec() {
      counter--;
      console.log(counter);
    },
    inc() {
      counter++;
      console.log(counter);
    },
    reset() {
      counter = 0;
      console.log(counter);
    },
  };
}

let pObject = p();
pObject.dec();
pObject.dec();
pObject.dec();
pObject.reset();
pObject.inc();
pObject.inc();

// counter => dec, inc ,reset => 0
// js Object => JSON
// { key:value , fun(){} }

// def / syntax / real world use-case

console.clear();

// async sync
// single thread program

// block  => sync =>
// 5 meeting => 1 hr (main thread)
// non blocking  => aysnc => event loop => web apis
// => DOM , setInterval, setTimeout, Promises, async await , fetch, xhr, geolocation

// Heap , Stack , Event Queue (Callback Queue), Web APIs (DOM, setTimeout, setInterval, fetch, xhr, geolocation)
// Microtask Queue (Promises, async await)
// MacroTask Queue (setTimeout, setInterval, fetch, xhr, geolocation)

console.clear();

async function printText(text = "") {
  try {
    if (text === "") {
      throw new Error("text is empty");
    }
    return Promise.resolve(text);
  } catch (error) {
    return Promise.reject(error);
  }
}
getData("https://jsonplaceholder.typicode.com/users");

printText("happy")
  .then(function (text) {
    console.log(text);
  })
  .catch(function (error) {
    alert(error.message);
    console.error(error.message);
  });
console.log("hello");
console.log("hi");

// apis => application programming interface

// server and client
// rest api => Representational State Transfer  => http , https => get, post, put, delete
// get => fetch data
// post => create data
// put => update data
// delete => delete data
// api => application programming interface

// end point = https://jsonplaceholder.typicode.com/users

async function getData(url = "") {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

// Promise.all()
// Promise.race()
// Promise.allSettled()
