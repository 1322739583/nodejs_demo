function renderPath(path){
    switch (path){
        case "/home":
            return "主页";
        case "/about":
            return "关于";
        case "/user/info":
            return '{name:"Tom",age:10}';
        default:
            return "404 not found";
    }
}

exports.renderPath=renderPath