// 输入信息库显示情况
var ShowInput = true;
function showInputTable() {
    if (showInput) {
        ele("AddInput").style.display = "none";
        showInput = false;
    }
    else {
        ele("AddInput").style.display = "block";
        showInput = true;
    }
}
// 更新课程
function updateInfo() {
    ele("title_h").innerText = ele("title_in").value;
}
