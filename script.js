var b=document.getElementById("btn")

function changeColor(item){
var e = document.querySelectorAll(".page");
e.forEach(function(item){
    console.log(item.textContent);
    item.classList.add("active");
})
}

function remove(item){
var e = document.querySelectorAll(".page");
e.forEach(function(item){
    console.log(item.textContent);
    item.classList.remove("active");
})
}
function toggle(item){
var e = document.querySelectorAll(".page");
e.forEach(function(item){
    console.log(item.textContent);
    item.classList.toggle("toggle");
})
}

