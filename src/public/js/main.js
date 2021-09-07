// menu
var MenuItem = document.getElementById("MenuItems");
MenuItem.style.maxHeight = "0px";
function menutoggle() {
    if(MenuItem.style.maxHeight  == "0px"){
        MenuItem.style.maxHeight  = "200px";
    }else{
        MenuItem.style.maxHeight  = "0px";
    }
}

// SliderShow

// create an array of image sources;
let images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg'
]
let i = 0;

//add initial image to canvas
let canvas = document.getElementById('canvas');
canvas.style.background = `url(./images/slider/${images[0]})`

//add eventListeners to arrows
let arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow){
    arrow.addEventListener('click', function(e){
        if (e.target.id === "left"){
            //check to see if at beginning of array
            i--;
            if (i < 0){
                i = images.length -1;
            }
            canvas.style.background = `url(./images/slider/${images[i]})`;
        } else if (e.target.id === "right") {
            i++;
            if (i >= images.length ){
                i = 0;
            }
            canvas.style.background = `url(./images/slider/${images[i]})`;
        }
    })
});
    

// about 

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});



// -----js for product gallery ----- product details

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

    SmallImg[0].onclick = function(){
        ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function(){
        ProductImg.src =  SmallImg[1].src;
    }
    SmallImg[2].onclick = function(){
        ProductImg.src =SmallImg[2].src;
    }
    SmallImg[3].onclick = function(){
        ProductImg.src = SmallImg[3].src;
    }


// đổi màu cho cái chi tiêt sản phẩm


const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
let prevColor = "blue";
let animationEnd = true;
function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}
function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    //if(color == prevColor) return;
   
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);

}
sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));


// --sidershows -----

