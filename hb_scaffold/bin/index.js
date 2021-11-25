#!/usr/bin/env node
const lib = require('hb_scaffold-lib')
const importLocal = require('import-local')
const { sub , max} = lib
const {argv} = process
const [a,b,...commands] = argv
let [command,...option] = commands;
// 参数解析
if(command){
    if(lib[command]){
        lib[command]({command, option})
    }else{
        console.error(`没有${command}方法`)
    }
}else{
    console.error("参数不存在")
}
