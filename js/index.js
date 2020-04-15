/* jshint esversion : 6*/
// 输入信息库显示情况
const ShowInput = true;
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
    let v = document.getElementById("title_in").value;
    document.getElementById("title_h").innerHTML = v;
}
// 添加课程
function addtoClass() {
    let day = document.getElementById("day").value;
    let section = document.getElementById("section").value;
    let half_section = document.getElementById("half_section").value;
    let class_name = document.getElementById("class_name").value;
    let start_week = document.getElementById("start_week").value;
    let end_week = document.getElementById("end_week").value;
    let weekly = document.getElementById("weekly").value;
    let class_place = document.getElementById("class_place").value;
    let class_teacher = document.getElementById("class_teacher").value;

    let add = document.getElementById(day + "_" + section);
    let div = document.createElement("div");
    div.id = day + "_" + section + "_div";
    if (half_section == "正常") {
        if (weekly == "正常") {
            div.innerHTML = "<b>" + class_name + "</b><br /><span>时间:(" + section + "-" + (Number(section) + 1) + ")" + start_week + "-" + end_week + "周<br />教师姓名:" + class_teacher + "<br />教室位置:" + class_place + "</span>";
        } else if (weekly == "单周") {
            div.innerHTML = "<b>" + class_name + "</b><br /><span>时间:(" + section + "-" + (Number(section) + 1) + ")" + start_week + "-" + end_week + "周(单)<br />教师姓名:" + class_teacher + "<br />教室位置:" + class_place + "</span>";
        } else if (weekly == "双周") {
            div.innerHTML = "<b>" + class_name + "</b><br /><span>时间:(" + section + "-" + (Number(section) + 1) + ")" + start_week + "-" + end_week + "周(双)<br />教师姓名:" + class_teacher + "<br />教室位置:" + class_place + "</span>";
        }
        let i = '#' + day + "_" + section;
        $(i).attr("rowspan", "2");
        let j = '#' + day + "_" + (Number(section) + 1);
        document.getElementById(day + "_" + (Number(section) + 1)).style.display = "none";
    } else if (half_section == "上半节") {
        if (weekly == "正常") {
            div.innerHTML = "<b>" + class_name + "</b><br /><span>时间:(" + section + "-" + section + ")" + start_week + "-" + end_week + "周<br />教师姓名:" + class_teacher + "<br />教室位置:" + class_place + "</span>";
        } else if (weekly == "单周") {
            div.innerHTML = "<b>" + class_name + "</b><br /><span>时间:(" + section + "-" + section + ")" + start_week + "-" + end_week + "周(单)<br />教师姓名:" + class_teacher + "<br />教室位置:" + class_place + "</span>";
        } else if (weekly == "双周") {
            div.innerHTML = "<b>" + class_name + "</b><br /><span>时间:(" + section + "-" + section + ")" + start_week + "-" + end_week + "周(双)<br />教师姓名:" + class_teacher + "<br />教室位置:" + class_place + "</span>";
        }
    } else if (half_section == "下半节") {
        if (weekly == "正常") {
            div.innerHTML = "<b>" + class_name + "</b><br /><span>时间:(" + (Number(section) + 1) + "-" + (Number(section) + 1) + ")" + start_week + "-" + end_week + "周<br />教师姓名:" + class_teacher + "<br />教室位置:" + class_place + "</span>";
        } else if (weekly == "单周") {
            div.innerHTML = "<b>" + class_name + "</b><br /><span>时间:(" + (Number(section) + 1) + "-" + (Number(section) + 1) + ")" + start_week + "-" + end_week + "周(单)<br />教师姓名:" + class_teacher + "<br />教室位置:" + class_place + "</span>";
        } else if (weekly == "双周") {
            div.innerHTML = "<b>" + class_name + "</b><br /><span>时间:(" + (Number(section) + 1) + "-" + (Number(section) + 1) + ")" + start_week + "-" + end_week + "周(双)<br />教师姓名:" + class_teacher + "<br />教室位置:" + class_place + "</span>";
        }
    }
    //为div创建属性class = "class_info"
    var divattr = document.createAttribute("class");
    divattr.value = "class_info";
    //把属性class = "class_info"添加到div
    div.setAttributeNode(divattr);
    add.appendChild(div);
    let d = String(day) + "_" + section;
    let n = String(day) + "_" + String(Number(section) + 1);
    let h = "#" + div.id;
    let m = document.getElementById(div.id);
    m.onclick = () => {
        delclass(div.id, d, n);
    };
    resetclass();
}
// 重置添加信息
function resetclass() {
    document.getElementById("day").value = "1";
    document.getElementById("section").value = "1";
    document.getElementById("half_section").value = "正常";
    document.getElementById("start_week").value = "1";
    document.getElementById("end_week").value = "1";
    document.getElementById("weekly").value = "正常";
    document.getElementById("class_place").value = "";
    document.getElementById("class_teacher").value = "";
    document.getElementById("class_name").value = "";
}
// 删除课程信息
function delclass(id, n, m) {
    let i = '#' + id;
    $(i).empty();
    let h = $(i).offsetHeight;
    document.getElementById(id).style.display = "none";
    document.getElementById(id).style.height = h * 0.5 + "px";
    var c = '#' + n;
    $(c).attr("rowspan", "1");
    document.getElementById(m).style.display = "table-cell";
}
// 导出结果
function exportResult() {
    $("#myTable").table2excel({
        filename: "Class_Schedule" + ".xls", //文件名称
        name: "Excel Document Name.xlsx",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true
    });
}