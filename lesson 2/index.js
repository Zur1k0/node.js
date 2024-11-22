const fs = require('fs')
const path = require('path')

// Проверка папки на существование
function f01() {
    const pathToDir = './test';
    if (fs.existsSync(pathToDir)){
        console.log('yes')
    } else {
        console.log('no')
    };
}

//f01()

// Проверка файла на существование
function f02() {
    const pathToFile = './test/info.dat';
    if (fs.existsSync(pathToFile)){
        console.log('yes')
    } else {
        console.log('no')
    };
}

//f02()

// Вычисление размера файла
function f03() {
    const pathToFile = './test/potter.doc';
    const fileInfo = fs.statSync(pathToFile);
    console.log(fileInfo)
}

// f03()

// Имя и расширение файла
function f04() {
    const pathToFile = './test/file_example_MP3.mp3';
    console.log(path.basename(pathToFile))
    console.log(path.dirname(pathToFile))
    console.log(path.extname(pathToFile))
    console.log(path.parse(pathToFile))
}

// f04()

// Получаем файлы и папки в директории
function f05() {
    const pathToDir = './test';
    if(fs.existsSync(pathToDir)){
        const allFiles = fs.readdirSync(pathToDir)
        console.log(allFiles)
        let out = '';
        allFiles.forEach(item => out += item + '\n');
        console.log(out)
    } else {
        console.log(`${pathToDir} is not exist`)
    }

}

// f05()

// Получение абсолютного пути

const directoryPath = path.join(__dirname, 'test');
console.log(directoryPath);
console.log(__dirname);
