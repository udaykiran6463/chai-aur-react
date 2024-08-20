// version - 1
// function customRender(reactEle, container){
//     const domEle = document.createElement(reactEle.type)
//     domEle.innerHTML = reactEle.children
//     domEle.setAttribute('href',reactEle.props.href)
//     domEle.setAttribute('target',reactEle.props.target)
//     container.appendChild(domEle);
// }


// version--2
function customRender(reactEle, container){
    const domEle = document.createElement(reactEle.type)
    domEle.innerHTML = reactEle.children
    for (const prop in reactEle.props) {
        if(prop === 'children') continue;
        domEle.setAttribute(prop,reactEle.props[prop]);
    }
    container.appendChild(domEle);
}

const reactEleGoogle = {
    type:'a',
    props: {
        href:"https://google.com",
        target:'_blank'
    },
    children:'click here to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactEleGoogle,mainContainer)