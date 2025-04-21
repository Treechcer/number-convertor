function main(){
    var num = parseInt(document.getElementById("num").value)
    var numSys = parseInt(document.getElementById("numSys").value)
    var output = document.getElementById("output")

    var result = ""
    var cache = num

    while (num > 0) {
        result = (num % numSys) + result
        num = Math.floor(num / numSys)
    }

    output.textContent = `${cache} is ${numSys} number system is: ${result}`
}