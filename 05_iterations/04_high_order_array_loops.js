// for in
// works for object

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "python", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')

for (const key in map) {
    console.log(key);
} // no result because map is not iterable