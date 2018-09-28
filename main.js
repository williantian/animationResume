
/*把code写到#code和style标签里*/
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        /*domCode.innerHTML = code.substring(0, n)*/
        domCode.innerHTML =
            Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n > code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 0)

}

var result = `
/*
 *面试官你好  我是XX
 *我将以动画的形式来介绍我自己
 *只用文字介绍太单调了
 *我就准备用代码来介绍吧
 *首先准备一些样式
 */
html{
    background-color: rgb(222, 222, 222);
    font-size: 16px;
}
/*加个边框*/
#code{
    border: 1px solid red;
    padding: 16px;
}
/* 接下来 我需要一些高亮*/
.token.function{
    color: #dd4a68;
}
.token.property{
    color: #905;
}
.token.selector{
    color: #690;
}

/*加点3D效果*/
#code{
    transform: rotate(360deg);
}

/* 我来介绍一下我自己吧
 *我需要一张白纸*/


 `
var result2 = `
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: grey;
    padding:16px;
}
#paper > .content{
    background: white;
    width: 100%;
    height: 100%;

}
`
var md =`
# 自我介绍
我叫XXX
自学前端半年
希望应聘前端开发岗位

#技能介绍

熟悉JavaScript CSS
`

writeCode('', result, () => {
    console.log(1)
    createPaper(() => {
        console.log('paper有了')
        writeCode(result, result2, ()=>{
            writeMarkDown(md)
        })
    })
})
function writeMarkDown(makeDown){
    let domPaper = document.querySelector('#paper > .content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = makeDown.substring(0, n)
        
        domPaper.scrollTop = domPaper.scrollHeight
        if (n > makeDown.length) {
            window.clearInterval(id)
            
        }
    }, 0)

}

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

