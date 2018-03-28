#!/usr/bin/env node
//第一行是shebang，默认输入~/local/jsdemo xxx相当于sh ~/local/jsdemo xxx
//加入第一行表示这个文件不要用默认的shell来执行，用node执行，可以直接输入~/local/jsdemo xxx
//由于~/local已经放入到PATH中了,在~/.bashrc中将其加入的，所以又可以直接执行jsdemo xxx
var fs = require('fs')

var dirName = process.argv[2]           //你传入的参数是从第 2 个开始的
if(!fs.existsSync("./" + dirName)) {
  fs.mkdirSync("./" + dirName)            //mkdir $1
  process.chdir("./" + dirName)           //cd $1
  fs.mkdirSync('css')                     //mkdir css
  fs.mkdirSync('js')                      //mkdir js
  
  fs.writeFileSync("./index.html", "<!DOCTYPE>" + "\n" +
  "<title>Hello</title>" + "\n" +
  "<h1>Hi</h1>")    //echo "" > index.html
  fs.writeFileSync("css/style.css", "h1{color: red;}")   //echo "" > css/style.css
  fs.writeFileSync("./js/main.js", "var string = 'Hello World'" + "\n" +
  "alert(string)")    //echo "" > js/main.js
  process.exit(0)
} else {
  console.log('文件已经存在了')
  process.exit(1)
}
