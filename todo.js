let divNhapDuLieu = document.getElementById("myDIV").children;
// console.log(divNhapDuLieu[2]);
function newElement() {
    let noiDung = document.getElementById("myInput").value;
    let liText = document.createElement("li");
    liText.innerHTML = noiDung;
    if (noiDung == "") {
        alert("Không ghi gì sao có cái mà lưu?");
    } else {
        document.getElementById("myUL").appendChild(liText);
        document.getElementById("myInput").value = "";
    }
    console.log(li.length);
    console.log(xoaThe);
}
// checked
let ul = document.getElementById("myUL");
li = ul.children;

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function() {
        li[i].classList.add("checked");
    });
}
//cho dù số thẻ li tăng thêm 
//nhưng không thể thực hiện sự kiện checked?
// vì ul chưa cập nhật?

//close
let xoaThe = document.getElementsByTagName("li");

// console.log(xoaThe);
for (let i = 0; i < li.length; i++) {
    let span = li[i].children;
    // console.log(span[0]);
    span[0].addEventListener("click", function() {
        ul.removeChild(li[i]);
    });
}