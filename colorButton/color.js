// var index = 0;
// function changeColor() {
//     var colors = ["red", "blue", "green", "purple", "black", "pink", "orange", "yellow", "brown",];
//     document.getElementsByTagName("body")[0].
//         style.background = colors[index++];

//     if (index > colors.length - 1)
//         index = 0;
// }

var kashif = 0;
function changeColor() {
    var colors = ["red", "blue", "green", "purple", "black", "pink", "orange", "yellow", "brown",];
    document.getElementsByTagName("body")[0].style.background = colors[kashif++];
    if (kashif > colors.length - 1)
        kashif = 0
}