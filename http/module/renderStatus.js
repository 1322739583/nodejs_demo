let arr=["/home","/about","/user/info"]

function renderStatus(path){
    return arr.includes(path)?200:404
}

module.exports= {
    renderStatus
}
