// 输入信息库显示情况
var ShowInput = true;
function showInputTable() {
    if (showInput) {
        document.getElementById("AddInput").style.display = "none";
        showInput = false;
    }
    else {
        document.getElementById("AddInput").style.display = "block";
        showInput = true;
    }
}
// 更新课程
function updateInfo() {
    var v = document.getElementById("title_in").value;
    document.getElementById("title_h").innerHTML = v;
}
