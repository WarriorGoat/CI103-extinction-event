let list1 = document.querySelectorAll("ol li");
for(let i = 0; i< list1.length; i++){
    list1[i].addEventListener("click", function(){
        strike(list1[i])})}

let list2 = document.querySelectorAll("ul li");
for(let i = 0; i< list2.length; i++){
    list2[i].addEventListener("click", function(){
        fade(list2[i])})}

let picture = document.querySelectorAll("img");
for(let i = 0; i< picture.length; i++){
    picture[i].addEventListener("click", function(){
        collapse (picture[i])})}

let meteor = document.querySelector ("button");
meteor.addEventListener("click", function(){
    list1.forEach((item) => strike(item));
    list2.forEach((item) => fade(item));
    picture.forEach((item) => collapse(item));
})

//FUNCTION LIBRARY
function strike(item){item.style.textDecoration = "line-through"}

function fade(item){item.style.opacity = 0}

function collapse(item){item.style.width = 0}