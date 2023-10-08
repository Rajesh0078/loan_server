const compiler = require("compilex")

let option = { stats: true }
compiler.init(option)

const oCompile = (req, res) => {
    let { code, input, inputRadio, lang } = req.body
    if (lang === "C" || lang === "C++") {
        if (inputRadio === true) {
            var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }
            compiler.compileCPPWithInput(envData, code, input, function (data) {
                if (data.error) {
                    res.send(data.error);
                } else {
                    res.send(data.output);
                }
            });
        }
        else {
            var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }
            compiler.compileCPP(envData, code, function (data) {
                if (data.error) {
                    res.send(data.error);
                } else {
                    res.send(data.output);
                }
            });
        }
    }
    if (lang === "Python") {
        if (inputRadio === true) {
            var envData = { OS: "windows", options: { timeout: 10000 } }
            compiler.compilePythonWithInput(envData, code, input, function (data) {
                if (data.error) {
                    res.send(data.error);
                } else {
                    res.send(data.output);
                }
            });
        }
        else {
            var envData = { OS: "windows", options: { timeout: 10000 } }
            compiler.compilePython(envData, code, function (data) {
                if (data.error) {
                    res.send(data.error);
                } else {
                    res.send(data.output);
                }
            });
        }
    }
    if (lang === "Java") {
        if (inputRadio === true) {
            var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }
            compiler.compileJavaWithInput(envData, code, input, function (data) {
                if (data.error) {
                    res.send(data.error);
                } else {
                    res.send(data.output);
                }
            });
        }
        else {
            var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }
            compiler.compileJava(envData, code, function (data) {
                if (data.error) {
                    res.send(data.error);
                } else {
                    res.send(data.output);
                }
            });
        }
    }
}

module.exports = oCompile