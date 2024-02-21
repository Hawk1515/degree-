alert("1-uy ishi")
let a = + prompt("son kiritng biz uni juft yoki toqligini aniqlaymiz")
while (isNaN(a) || a == 0) {
    a = + prompt("nmadir notogri " + " iltimos son kirting")
}
if (a % 2 == 0) {
    alert("juft ")
} else if (a % 2 > 0) {
    alert("toq")
}

alert("2-uy ishi ¯\_(ツ)_/¯   "  )
let num = +prompt("son kiriting")
let deg = +prompt("istalgan darajani kiriting")
let num2 = 1
for (let i = 0; i < deg ; i++) {
 num2=num2*num
}
alert(num2)



