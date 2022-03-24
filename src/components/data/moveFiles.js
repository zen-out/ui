const ccc = require("clear_concise_creative")
ccc.list()
let read = ccc.getDirNames("./", ".jsx")

let string = name => `import { ${name} } from './${name}'`
let final = ""
let final2 = ""
for (let i = 0; i < read.length; i++) {
    final += string(read[i]) + "\n"
    final2 += read[i] + ", "
}
console.log(final)
console.log(final2)