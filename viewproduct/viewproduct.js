let prdct=JSON.parse(localStorage.getItem("displayp"))
var idiv=document.createElement("div")
var img=document.createElement("img")
img.src=prdct.imageUrl
idiv.append(img)
var ddiv=document.createElement("div")
var h3=document.createElement("h3")
h3.innerText=prdct.category
var h2=document.createElement("h2")
h2.innerText=prdct.brand
var h1=document.createElement("h1")
h1.innerText=prdct.name
var d1div=document.createElement("div")
d1div.setAttribute("id","d1div")
var span1=document.createElement("span")
var rat=document.createElement("i")
rat.setAttribute("class","fa-solid fa-star")
span1.innerText=prdct.stars;
span1.append(rat)
var span2=document.createElement("span")
span2.innerText=" |  Ask a question"
var span3=document.createElement("span")
var heart=document.createElement("i")
heart.setAttribute("class","fa-solid fa-heart")
span3.innerText=`|   ${prdct.numReviews} `

span3.append(heart)

var price=document.createElement("p")
price.innerText=`$:${prdct.price} or 4 payments of $7.50 with Klarna ⓘ` 

var shipped=document.createElement("div")
shipped.setAttribute("id","shipped")
var hh=document.createElement("span")
hh.innerText="Get It Shipped"
var spann=document.createElement("a")
spann.innerText="Shipping & Returns"
spann.href="";

var sdiv=document.createElement("div")
var r1=document.createElement("input")
r1.type="radio"
r1.style.height="20px"
r1.style.width="20px"
var s1=document.createElement("span")
s1.innerText="Standard"
s1.style.fontWeight="900"
var s2=document.createElement("span")
s2.innerText="Enjoy free shipping with code"
var s3=document.createElement("a")
s3.innerText="FREESHIP"
s3.style.color="red"
s3.style.fontWeight="700"
sdiv.append(r1,s1,s2,s3)

var sdiv1=document.createElement("div")
var r11=document.createElement("input")
r11.type="radio"
r11.style.height="20px"
r11.style.width="20px"
var s11=document.createElement("span")
s11.innerText="Same-Day Delivery ⓘ"
s11.style.fontWeight="900"
var s22=document.createElement("span")
s22.innerText="Same-Day Delivery not available for "
var s33=document.createElement("a")
s33.innerText="your location"
s33.style.fontWeight="600"
sdiv1.append(r11,s11,s22,s33)


var add=document.createElement("div")
add.setAttribute("id","additem")
add.innerText="Add to Basket"
add.addEventListener("click",addItem)
shipped.append(hh,spann,sdiv,sdiv1)
d1div.append(span1,span2,span3)
ddiv.append(h3,h2,h1,d1div,price,shipped,add)

document.querySelector("#view").append(idiv,ddiv)


///
var basketItem=[];
function addItem(prdct){
    basketItem.push(prdct);
    alert("Successfully Added to the Basket");
    localStorage.setItem("basketItem",JSON.stringify(basketItem));
}