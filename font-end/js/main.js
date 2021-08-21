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
