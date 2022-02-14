let map = new Map();

let number = 0;
let str = "string";
let obj = { a: 1 };
let fnc = () => {
  console.log("fnc");
};

map.set(number, 1);
map.set(str, 4);
map.set(obj, 1);
map.set(fnc, 1);
map.set(number, 10);

let log;

map.get(str);
map.get(obj);
map.get("no");
map.get({ a: 1 });

map.has(str);
map.has(obj);
map.has("none");

// map.delete(str);
map.has(str);

map.size;

// for (let [key, value] of map) {
//   console.log(key + ` : ` + value);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

for (let value of map.values()) {
  console.log(value);
}

// console.log(log);
// console.log(map);
