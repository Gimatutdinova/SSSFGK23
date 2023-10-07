import {encoded, translations} from './data.js'

let decoded = Object.assign(encoded);
let not_find = ['groupId', 'service', 'formatSize', 'ca'];
let unique = {};
function decodedFunc() {
    for (let i = 0; i < decoded.length; i++) {
        for (let key in decoded[i]) {
            if (!(not_find.includes(key)) && key.slice(-2).toLowerCase() === "id") {
                decoded[i][key] in unique ? unique[decoded[i][key]] += 1 : unique[decoded[i][key]] = 1;
                decoded[i][key] = translations[decoded[i][key]]??null;
            };
        };
    };
};

decodedFunc();

let unic_arr = [];
for (let key in unique) {
    if (unique[key] === 1) {
        unic_arr.push(key);
    };
};

console.log(decoded);
console.log("Уникальные id:", unic_arr.join(', '));