var names = [];
var names1=[];
function submit1() {
    for (var j = 1; j <= 6; j++) {
        var temp = document.getElementById("text" + j).value;
        console.log(temp);
        names.push(temp);
    }
    console.log(names);
    document.getElementById("para").innerHTML=names.join(".");
    document.getElementById("submit_button1").style.display="none";
}
function submit2() {
    for (var j = 1; j <= 6; j++) {
        var temp = document.getElementById("text_" + j).value;
        console.log(temp);
        names1.push(temp);
    }
    console.log(names1);
    document.getElementById("para1").innerHTML=names1.join(".");
    document.getElementById("submit_button2").style.display="none"
}