function sortList() {
    var list = document.getElementById("item-list");
    var nodes = list.children;
    nodes = [...nodes].sort((a,b)=>Number(a.innerText) - Number(b.innerText));;
    for (let i = 0; i < nodes.length; i++) {
        list.appendChild(nodes[i]);
    }
}

function shuffle(items) {
    var tempList = items.slice(0), temp, i = tempList.length, random;
    while (--i) {
        random = Math.floor(i * Math.random());
        temp = tempList[random];
        tempList[random] = tempList[i];
        tempList[i] = temp;
    }
    return tempList;
}
function shuffleList() {
    var list = document.getElementById("item-list");
    var nodes = list.children;
    nodes = [...nodes]
    nodes = shuffle(nodes);
    for (let i = 0; i < nodes.length; i++) {
        list.appendChild(nodes[i]);
    }
}