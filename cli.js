#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改
// 用于检查入口文件是否正常执行
console.log('isolcat-cli')

// 引入各种包
const program = require("commander")
const chalk = require('chalk')
const inquirer = require('inquirer');
const ora = require("ora");
const spinner = ora("Loading unicorns");
var figlet = require('figlet');

// 解析用户执行时输入的参数
// process.argv是node.js提供的属性
// npm run server --post 3000
// 后面的 --post 3000就是用户输入的参数
program
    .name("isolcat-cli")
    .usage(`<command> [option]`)
    .version(`1.0.0`);


// 使用 cyan 颜色
program.on("--help", function() {
    // 前后两个空行调整格式，更舒适
    console.log();
    console.log(
        `Run ${chalk.cyan(
            "isolcat <command> --help"
        )} for detailed usage of given command.`
    );
    console.log();
});


//  zc 入口文件
program
    .command("create <project-name>") // 增加创建指令
    .description("create a new project") // 添加描述信息
    .option("-f, --force", "overwrite target directory if it exists") // 强制覆盖
    .action((projectName, cmd) => {
        // 引入 create 模块，并传入参数
        require("./bin/create")(projectName, cmd);
    });



program
    .command("config [value]") // config 命令
    .description("inspect and modify the config")
    .option("-g, --get <key>", "get value by key")
    .option("-s, --set <key> <value>", "set option[key] is value")
    .option("-d, --delete <key>", "delete option by key")
    .action((value, keys) => {
        // value 可以取到 [value] 值，keys会获取到命令参数
        console.log(value, keys);
    });



// 艺术字
console.log(
    "\r\n" +
    figlet.textSync("isolcat", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    })
);


program.parse(process.argv);