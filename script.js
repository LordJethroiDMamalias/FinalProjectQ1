var name1 = document.getElementById("name1");
var check_name1 = document.getElementById("check_name1");
var display_name = document.getElementById("display_name");
var name2 = document.getElementById("name2");
var check_name2 = document.getElementById("check_name2");
var email = document.getElementById("email");
var check_email = document.getElementById("check_email");
var display_email = document.getElementById("display_email");
var support = document.getElementById("support");
var check_support = document.getElementById("check_support");
var display_support = document.getElementById("display_support");
var male = document.getElementById("male");
var female = document.getElementById("female");
var nil = document.getElementById("nil");
var check_sex = document.getElementById("check_sex");
var display_sex = document.getElementById("display_sex");
var c1, c2, c3, c4, c5 = false;

var videoList = [];
var file = document.getElementById("upload_file");
var check_file = document.getElementById("check_file");
var title = document.getElementById("upload_title");
var check_title = document.getElementById("check_title");
var display_video = document.getElementById("display_video");

function checkRequired() {
    if (name1.value.length == 0) {
        check_name1.style.display = "inline";
        c1 = false;
    }
    else {
        check_name1.style.display = "none";
        c1 = true;
    }

    if (name2.value.length == 0) {
        check_name2.style.display = "inline";
        c2 = false;
    }
    else {
        check_name2.style.display = "none";
        c2 = true;
    }

    if (email.value.length == 0) {
        check_email.style.display = "inline";
        c3 = false;
    }
    else {
        check_email.style.display = "none";
        c3 = true;
    }
    
    if (support.value.length == 0) {
        check_support.style.display = "inline";
        c4 = false;
    }
    else {
        check_support.style.display = "none";
        c4 = true;
    }

    if (male.checked == female.checked && female.checked == nil.checked) {
        check_sex.style.display = "inline";
        c5 = false;
    }
    else {
        check_sex.style.display = "none";
        c5 = true;
    }

    if (!(c1 == true && c1 == c2 && c2 == c3 && c3 == c4 && c4 == c5 )) {
        return;
    }

    save_data();
    return;
}

function save_data() {
    if (Storage.type == "undefined") {
        alert("Your browser does not support localStorage.")
        return;
    }

    localStorage.setItem("name", name1.value + " " + name2.value);

    if (male.checked == true) {
        localStorage.setItem("sex", male.value);
    }
    else if (female.checked == true) {
        localStorage.setItem("sex", female.value);
    }
    else if (nil.checked == true) {
        localStorage.setItem("sex", nil.value);
    }

    localStorage.setItem("email", email.value);
    localStorage.setItem("support", support.value);

    location.replace("proj_profile_mamalias.html");
}

function save_data2() {
    if (Storage.type == "undefined") {
        alert("Your browser does not support localStorage.")
        return;
    }
    videoList.push(title.value);
    console.log("added " + title.value + " to video list");
    console.log(videoList)
    localStorage.setItem("videoList", JSON.stringify(videoList));
}

function display_data() {    
    display_namesex.innerHTML += localStorage.getItem("name") + " (" + localStorage.getItem("sex") + ").";
    display_email.innerHTML = localStorage.getItem("email");
    display_support.innerHTML = localStorage.getItem("support");

    var videoList_long = JSON.parse(localStorage.getItem("videoList") || []);

    var list = "<ul>";
    videoList_long.forEach(function(element, index) {
        console.log("[" + index + "]: " + element);
        list += element;
    });
    list += "</ul>";

    display_video.innerHTML = list;
}

var f1, f2 = false;

function videoUpload() {
    if (file.files.length == 0) {
        check_file.style.display = "inline";
        f1 = false;
    }
    else {
        check_file.style.display = "none";
        f1 = true;
    }

    if (title.value.length == 0) {
        check_title.style.display = "inline";
        f2 = false;
    }
    else {
        check_title.style.display = "none";
        f2 = true;
    }

    if (!(f1 == true && f1 == f2)) {
        return;
    }

    save_data2();
    document.getElementById("upload_form").reset();
    return;
}