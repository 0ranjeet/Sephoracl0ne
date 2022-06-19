var userCart = JSON.parse(localStorage.getItem("array")) || []


var cartMrpTotal = userCart.reduce(function(sum,element){
    return sum + Number(element.Price)
},0)


document.querySelector("#subtotal").innerText = "Merchendise subtotal" + "   "+ "$" + Number(cartMrpTotal).toFixed(2)
document.querySelector("#TOTAL").innerText = "Estimated Total" + "   "+ "$" + Number(cartMrpTotal).toFixed(2)




if(userCart.length == 0){
    window.location.href = "emptbasket.html"
}
else{
  
  userCart.map(function(element,index){

      var imageProduct = document.createElement("img")
      imageProduct.setAttribute("class","image-product")
      imageProduct.src = element.imageUrl

      var divison = document.createElement("div")
      divison.setAttribute("class","divison")

      var description = document.createElement("h3")
      description.setAttribute("class","desc")
      description.innerText = element.name

      var amount = document.createElement("p")
      amount.setAttribute("class","amount")
      amount.innerText = element.productPrice

      var buttonRemove = document.createElement("button")
      buttonRemove.setAttribute("class","remove-button")
      buttonRemove.innerText = "REMOVE"
      buttonRemove.addEventListener("click",function(){
          removeFromCart(element,index)
      })

      var line = document.createElement("hr")

      divison.append(imageProduct,description,amount,buttonRemove,line)
       document.querySelector("#box1").append(divison)
      
      })
}

function removeFromCart(element,index){
  userCart.splice(index,1)
  localStorage.setItem("array",JSON.stringify(userCart))
  window.location.reload()
}

function myfun(){
    window.location.href="index1.html"
     }