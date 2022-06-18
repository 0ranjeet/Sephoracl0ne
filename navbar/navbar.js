function codefreeship(){
    var divm=document.createElement("div")
    divm.setAttribute("id","divm")
    var div=document.createElement("div")
    div.setAttribute("id","freeship")
   var close=document.createElement("h1")
   close.setAttribute("id","close")
   close.innerText="X"
   close.addEventListener("click",closefun)
   function closefun(){
    document.querySelector("#divm").remove();
   }

    var h1=document.createElement("h2")
    h1.innerText="Buy Online, Pick Up In Store"
    var p1=document.createElement("p")
    var l=document.createElement("a")
    l.innerText="Learn more"
    l.href="https://www.sephora.com/beauty/pick-up-delivery-options"
    l.setAttribute("id","freeshiplearn")
    var r=document.createElement("i")
    r.setAttribute("class","fa-solid fa-caret-right")
    r.style.color="blue"
    p1.innerText="Purchase your products online and get them in a store near you today - in 2 hours or less! "
    p1.append(l,r)

    var h2=document.createElement("h2")
    h2.innerText="Free standard shipping on orders with code FREESHIP"
    var p2=document.createElement("p")
    p2.innerText="†Free standard shipping offer valid on merchandise purchases made through 11:59pm PT on 8/31/22 on sephora.com and sephora.ca. Offer not applicable to Same Day Shipping orders. Promotion offer has no cash value and may not be altered, sold, or transferred. May be used in conjunction with other offers. Sephora, JCPenney, and Kohl's employees are not eligible for this offer. Offer is subject to change, alteration, or termination by Sephora at its sole discretion at any time."

document.querySelector("#ubody").append(divm)
divm.append(div)
div.append(close,h1,p1,h2,p2)

}
function newm(){
  if (document.querySelector("#newm").innerText!=""){
    document.querySelector("#newm").innerText="";
  }
  
    var data=document.querySelector("#newm")
    var d=document.createElement("div")
    d.setAttribute("id","al_new_m")
    var l=document.createElement("a")
    l.href=""
    l.innerText="All New"
    var l1=document.createElement("a")
        l1.href=""
        l1.innerText="just droped"
    var l2=document.createElement("a")
        l2.href=""
        l2.innerText="New Makeup"
    var l3=document.createElement("a")
        l3.href=""
        l3.innerText="New Skincare"
    var l4=document.createElement("a")
        l4.href=""
        l4.innerText="New Haircare"
    var l5=document.createElement("a")
        l5.href=""
        l5.innerText="New Fargrance"
    var l6=document.createElement("a")
        l6.href=""
        l6.innerText="New Bath& Body"
    var l7=document.createElement("a")
        l7.href=""
        l7.innerText="New Tool & Brushes"

        var d1=document.createElement("div")
        d1.setAttribute("id","al_new_m1")
        var ll=document.createElement("a")
            ll.href=""
            ll.innerText="All New"
        var ll1=document.createElement("a")
            ll1.href=""
            ll1.innerText="just droped"
        var ll2=document.createElement("a")
            ll2.href=""
            ll2.innerText="New Makeup"
        var ll3=document.createElement("a")
            ll3.href=""
            ll3.innerText="New Skincare"
        var ll4=document.createElement("a")
            ll4.href=""
            ll4.innerText="New Haircare"
    
            var d2=document.createElement("div")
            d2.setAttribute("id","al_new_mi")
            var img=document.createElement("img");
            img.src="https://www.sephora.com/contentimages/meganav/large/2022-june-body-site-desktop-global-navigation-button-us.jpg?imwidth=294"
            var img1=document.createElement("img");
            img1.src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"
   
    d.append(l,l1,l2,l3,l4,l5,l6,l7)
    d1.append(ll,ll1,ll2,ll3,ll4)
    d2.append(img,img1)
    data.append(d,d1,d2)
   
}


function newmn(){
    document.querySelector("#newm").innerText="";
}
function newb(){
   if (document.querySelector("#newm").innerText!=""){
      document.querySelector("#newm").innerText="";
    }
    
      var data=document.querySelector("#newm")
      var d=document.createElement("div")
      var l=document.createElement("a")
      l.href=""
      l.innerText="Brands A-Z"
      l.style.fontWeight="900"
      var l1=document.createElement("a")
          l1.href=""
          l1.innerText="Sophera collection"
      var l2=document.createElement("a")
          l2.href=""
          l2.innerText="New Brands"
      var l3=document.createElement("a")
          l3.href=""
          l3.innerText="The outset"
      var l4=document.createElement("a")
          l4.href=""
          l4.innerText="HAUS LABS BY LADY GAGA"
      var l5=document.createElement("a")
          l5.href=""
          l5.innerText="Abbott NYC"
      var l6=document.createElement("a")
          l6.href=""
          l6.innerText="GXVE Beauty"
      var l7=document.createElement("a")
          l7.href=""
          l7.innerText="Kate Mcleod"
  
          var d1=document.createElement("div")
          
          var ll=document.createElement("a")
              ll.href=""
              ll.innerText="Only At sephora"
              ll.style.fontWeight="900"
          var ll1=document.createElement("a")
              ll1.href=""
              ll1.innerText="just droped"
          var ll2=document.createElement("a")
              ll2.href=""
              ll2.innerText="New Makeup"
          var ll3=document.createElement("a")
              ll3.href=""
              ll3.innerText="New Skincare"
          var ll4=document.createElement("a")
              ll4.href=""
              ll4.innerText="New Haircare"
      
              var d2=document.createElement("div")
          
              var dll=document.createElement("a")
                  dll.href=""
                  dll.innerText="Affordable Brands"
                  dll.style.fontWeight="900"
              var dll1=document.createElement("a")
                  dll1.href=""
                  dll1.innerText="just droped"
              var dll2=document.createElement("a")
                  dll2.href=""
                  dll2.innerText="New Makeup"
              var dll3=document.createElement("a")
                  dll3.href=""
                  dll3.innerText="New Skincare"
                  
        
                      var d4=document.createElement("div")
          
                      var d2ll=document.createElement("a")
                          d2ll.href=""
                          d2ll.innerText="Black Own Brands"
                          d2ll.style.fontWeight="900"
                      var d2ll1=document.createElement("a")
                          d2ll1.href=""
                          d2ll1.innerText="just droped"
                      var d2ll2=document.createElement("a")
                          d2ll2.href=""
                          d2ll2.innerText="New Makeup"
                      var d2ll3=document.createElement("a")
                          d2ll3.href=""
                          d2ll3.innerText="New Skincare" 
                          var d5=document.createElement("div")
          
                          var d3ll=document.createElement("a")
                              d3ll.href=""
                              d3ll.innerText="Clean at Sephora"
                              d3ll.style.fontWeight="900"
                          var d3ll1=document.createElement("a")
                              d3ll1.href=""
                              d3ll1.innerText="just droped"
                          var d3ll2=document.createElement("a")
                              d3ll2.href=""
                              d3ll2.innerText="New Makeup"
                          var d3ll3=document.createElement("a")
                              d3ll3.href=""
                              d3ll3.innerText="New Skincare" 
     
      d.append(l,l1,l2,l3,l4,l5,l6,l7)
      d1.append(ll,ll1,ll2,ll3,ll4)
      d2.append(dll,dll1,dll2,dll3)
      d4.append(d2ll,d2ll1,d2ll2,d2ll3)
      d5.append(d3ll,d3ll1,d3ll2,d3ll3)
     


      data.append(d,d1,d2,d4,d5)
     
  }
  function bath(){
    if (document.querySelector("#newm").innerText!=""){
       document.querySelector("#newm").innerText="";
     }
     
       var data=document.querySelector("#newm")
       var d=document.createElement("div")
       var l=document.createElement("a")
       l.href=""
       l.innerText="Brands A-Z"
       l.style.fontWeight="900"
       var l1=document.createElement("a")
           l1.href=""
           l1.innerText="Sophera collection"
       var l2=document.createElement("a")
           l2.href=""
           l2.innerText="New Brands"
       var l3=document.createElement("a")
           l3.href=""
           l3.innerText="The outset"
       var l4=document.createElement("a")
           l4.href=""
           l4.innerText="HAUS LABS BY LADY GAGA"
       var l5=document.createElement("a")
           l5.href=""
           l5.innerText="Abbott NYC"
       var l6=document.createElement("a")
           l6.href=""
           l6.innerText="GXVE Beauty"
       var l7=document.createElement("a")
           l7.href=""
           l7.innerText="Kate Mcleod"
   
           var d1=document.createElement("div")
           
           var ll=document.createElement("a")
               ll.href=""
               ll.innerText="Only At sephora"
               ll.style.fontWeight="900"
           var ll1=document.createElement("a")
               ll1.href=""
               ll1.innerText="just droped"
           var ll2=document.createElement("a")
               ll2.href=""
               ll2.innerText="New Makeup"
           var ll3=document.createElement("a")
               ll3.href=""
               ll3.innerText="New Skincare"
           var ll4=document.createElement("a")
               ll4.href=""
               ll4.innerText="New Haircare"
       
               var d2=document.createElement("div")
           
               var dll=document.createElement("a")
                   dll.href=""
                   dll.innerText="Affordable Brands"
                   dll.style.fontWeight="900"
               var dll1=document.createElement("a")
                   dll1.href=""
                   dll1.innerText="just droped"
               var dll2=document.createElement("a")
                   dll2.href=""
                   dll2.innerText="New Makeup"
               var dll3=document.createElement("a")
                   dll3.href=""
                   dll3.innerText="New Skincare"
                   
         
                       var d4=document.createElement("div")
           
                       var d2ll=document.createElement("a")
                           d2ll.href=""
                           d2ll.innerText="Black Own Brands"
                           d2ll.style.fontWeight="900"
                       var d2ll1=document.createElement("a")
                           d2ll1.href=""
                           d2ll1.innerText="just droped"
                       var d2ll2=document.createElement("a")
                           d2ll2.href=""
                           d2ll2.innerText="New Makeup"
                       var d2ll3=document.createElement("a")
                           d2ll3.href=""
                           d2ll3.innerText="New Skincare" 
                           var d5=document.createElement("div")
                           var img=document.createElement("img");
                           img.src="https://www.sephora.com/contentimages/meganav/large/2020-9-14-site-desktop-global-navigation-button-banner-sol-de-janeiro.jpg?imwidth=294"
      
       d.append(l,l1,l2,l3,l4,l5,l6,l7)
       d1.append(ll,ll1,ll2,ll3,ll4)
       d2.append(dll,dll1,dll2,dll3)
       d4.append(d2ll,d2ll1,d2ll2,d2ll3)
       d5.append(img)
     
      
 
 
       data.append(d,d1,d2,d4,d5)
      
   }
  function newmakeup(){
    if (document.querySelector("#newm").innerText!==""){
       document.querySelector("#newm").innerText="";
     }
     
       var data=document.querySelector("#newm")
       var d=document.createElement("div")
       var l=document.createElement("a")
       l.href=""
       l.innerText="All New Makeup"
       l.style.fontWeight="900"
       var dl=document.createElement("a")
           dl.href=""
           dl.innerText="Face"
           dl.style.fontWeight="900"
       var l1=document.createElement("a")
           l1.href=""
           l1.innerText="Fopundation"
       var l2=document.createElement("a")
           l2.href=""
           l2.innerText="BB & CC Cream"
       var l3=document.createElement("a")
           l3.href=""
           l3.innerText="Tinted Moisturizer"
       var l4=document.createElement("a")
           l4.href=""
           l4.innerText="Concealer"
       var l5=document.createElement("a")
           l5.href=""
           l5.innerText="Face Primer"
       var l6=document.createElement("a")
           l6.href=""
           l6.innerText="Setting Spray & Powder"
       var l7=document.createElement("a")
           l7.href=""
           l7.innerText="Highlighter"
       var l8=document.createElement("a")
           l8.href=""
           l8.innerText="Contour"    
   
       var l9=document.createElement("a")
           l9.href=""
           l9.innerText="Color Corrects"
       var l10=document.createElement("a")
           l10.href=""
           l10.innerText="Face Sets"   
           var d1=document.createElement("div")
           
           var ll=document.createElement("a")
               ll.href=""
               ll.innerText="Eye"
               ll.style.fontWeight="900"
           var ll1=document.createElement("a")
               ll1.href=""
               ll1.innerText="Eye Paleettes"
           var ll2=document.createElement("a")
               ll2.href=""
               ll2.innerText="Mascara"
           var ll3=document.createElement("a")
               ll3.href=""
               ll3.innerText="Eyeliner"
           var ll4=document.createElement("a")
               ll4.href=""
               ll4.innerText="Eyebrow"
           var ll5=document.createElement("a")
               ll5.href=""
               ll5.innerText="False Eyelashes"
    
           var ll6=document.createElement("a")
               ll6.href=""
               ll6.innerText="Eyeshadow"
           var ll7=document.createElement("a")
               ll7.href=""
               ll7.innerText="Eyelash Serums"
           var ll8=document.createElement("a")
               ll8.href=""
               ll8.innerText="Eyebrow Serums"
           var ll9=document.createElement("a")
               ll9.href=""
               ll9.innerText="Eye primer" 
           var ll10=document.createElement("a")
               ll10.href=""
               ll10.innerText="Eye Sets"     
       
               var d2=document.createElement("div")
           
               var dll=document.createElement("a")
                   dll.href=""
                   dll.innerText="Lip"
                   dll.style.fontWeight="900"
               var dll1=document.createElement("a")
                   dll1.href=""
                   dll1.innerText="Lipstick"
               var dll2=document.createElement("a")
                   dll2.href=""
                   dll2.innerText="Lip Gloss"
               var dll3=document.createElement("a")
                   dll3.href=""
                   dll3.innerText="Lip Balm & Treatment"
               var dll4=document.createElement("a")
                   dll4.href=""
                   dll4.innerText="Liquid Lipstick"
               var dll5=document.createElement("a")
                   dll5.href=""
                   dll5.innerText="Lip Stain"
               var dll6=document.createElement("a")
                   dll6.href=""
                   dll6.innerText="Lip Liner"
               var dll7=document.createElement("a")
                   dll7.href=""
                   dll7.innerText="Lip Plumper"
               var dll8=document.createElement("a")
                   dll8.href=""
                   dll8.innerText="Lip Sets"    
                   var d3=document.createElement("div")
           
                   var d1ll=document.createElement("a")
                       d1ll.href=""
                       d1ll.innerText="Cheek"
                       d1ll.style.fontWeight="900"
                   var d1ll1=document.createElement("a")
                       d1ll1.href=""
                       d1ll1.innerText="Blush"
                   var d1ll2=document.createElement("a")
                       d1ll2.href=""
                       d1ll2.innerText="Bronzer"
                   var d1ll3=document.createElement("a")
                       d1ll3.href=""
                       d1ll3.innerText="Cheek Pallets"
                   var d1ll4=document.createElement("a")
                       d1ll4.href="";
                       d1ll4.style.fontWeight="900"
                       d1ll4.innerText="Value & Gift Sets"
                   var d1ll5=document.createElement("a")
                       d1ll5.href="";
                       d1ll5.style.fontWeight="900"
                       d1ll5.innerText="Makeup Palettes"
                   var d1ll6=document.createElement("a")
                       d1ll6.href="";
                       d1ll6.style.fontWeight="900"
                       d1ll6.innerText="Brushes & Applications"
                   var d1ll7=document.createElement("a")
                       d1ll7.href="";
                       d1ll7.style.fontWeight="900"
                       d1ll7.innerText="Accessories"
                   var d1ll8=document.createElement("a")
                       d1ll8.href="";
                       d1ll8.style.fontWeight="900"
                       d1ll8.innerText="Nail"    
         
                       var d4=document.createElement("div")
           
                       var d2ll=document.createElement("a")
                           d2ll.href=""
                           d2ll.innerText="New"
                           d2ll.style.fontWeight="900"
                       var d2ll1=document.createElement("a")
                           d2ll1.href="";
                           d2ll1.style.fontWeight="900"
                           d2ll1.innerText="Bestsellers"
                       var d2ll2=document.createElement("a")
                           d2ll2.href="";
                           d2ll2.style.fontWeight="900"
                           d2ll2.innerText="Clean Makeup"
                       var d2ll3=document.createElement("a")
                           d2ll3.href=""
                           d2ll3.style.fontWeight="900"
                           d2ll3.innerText="Vegan Makeup"
                       var d2ll4=document.createElement("a")
                           d2ll4.href=""
                           d2ll4.innerText="Mini Size"
                           d2ll4.style.fontWeight="900"
                       var d2ll5=document.createElement("a")
                           d2ll5.href=""
                           d2ll5.innerText="Value Size"
                           d2ll5.style.fontWeight="900" 
                       var d2l6=document.createElement("a")
                           d2l6.href=""
                           d2l6.innerText="Sephora Collection"
                           d2l6.style.fontWeight="900"
                       
                           var d5=document.createElement("div")
           
                           var d3ll=document.createElement("a")
                               d3ll.href=""
                               d3ll.innerText="help Me choose"
                               d3ll.style.fontWeight="900"
                           var d3ll1=document.createElement("a")
                               d3ll1.href=""
                               d3ll1.innerText="Foundqation quiz"
                           var d3ll2=document.createElement("a")
                               d3ll2.href=""
                               d3ll2.innerText="Lip Quiz"
                           var d3ll3=document.createElement("a")
                               d3ll3.href=""
                               d3ll3.innerText="Brow Quiz" 
      
       d.append(l,dl,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10)
       d1.append(ll,ll1,ll2,ll3,ll4,ll5,ll6,ll7,ll8,ll9,ll10)

       d2.append(dll,dll1,dll2,dll3,dll4,dll5,dll6,dll7,dll8)
       d3.append(d1ll,d1ll1,d1ll2,d1ll2,d1ll3,d1ll4,d1ll5,d1ll6,d1ll7,d1ll8)
      
       d4.append(d2ll,d2ll1,d2ll2,d2ll3,d2ll5,d2l6)
       d5.append(d3ll,d3ll1,d3ll2,d3ll3)
      
 
 
       data.append(d,d1,d2,d3,d4,d5)
      
   }
   

   function newskin(){
    if (document.querySelector("#newm").innerText!==""){
       document.querySelector("#newm").innerText="";
     }
     
       var data=document.querySelector("#newm")
       var d=document.createElement("div")
       var l=document.createElement("a")
       l.href=""
       l.innerText="All New Makeup"
       l.style.fontWeight="900"
       var dl=document.createElement("a")
           dl.href=""
           dl.innerText="Face"
           dl.style.fontWeight="900"
       var l1=document.createElement("a")
           l1.href=""
           l1.innerText="Fopundation"
       var l2=document.createElement("a")
           l2.href=""
           l2.innerText="BB & CC Cream"
       var l3=document.createElement("a")
           l3.href=""
           l3.innerText="Tinted Moisturizer"
       var l4=document.createElement("a")
           l4.href=""
           l4.innerText="Concealer"
       var l5=document.createElement("a")
           l5.href=""
           l5.innerText="Face Primer"
       var l6=document.createElement("a")
           l6.href=""
           l6.innerText="Setting Spray & Powder"
       var l7=document.createElement("a")
           l7.href=""
           l7.innerText="Highlighter"
       var l8=document.createElement("a")
           l8.href=""
           l8.innerText="Contour"    
   
       var l9=document.createElement("a")
           l9.href=""
           l9.innerText="Color Corrects"
       var l10=document.createElement("a")
           l10.href=""
           l10.innerText="Face Sets"   
           var d1=document.createElement("div")
           
           var ll=document.createElement("a")
               ll.href=""
               ll.innerText="Eye"
               ll.style.fontWeight="900"
           var ll1=document.createElement("a")
               ll1.href=""
               ll1.innerText="Eye Paleettes"
           var ll2=document.createElement("a")
               ll2.href=""
               ll2.innerText="Mascara"
           var ll3=document.createElement("a")
               ll3.href=""
               ll3.innerText="Eyeliner"
           var ll4=document.createElement("a")
               ll4.href=""
               ll4.innerText="Eyebrow"
           var ll5=document.createElement("a")
               ll5.href=""
               ll5.innerText="False Eyelashes"
    
           var ll6=document.createElement("a")
               ll6.href=""
               ll6.innerText="Eyeshadow"
           var ll7=document.createElement("a")
               ll7.href=""
               ll7.innerText="Eyelash Serums"
           var ll8=document.createElement("a")
               ll8.href=""
               ll8.innerText="Eyebrow Serums"
           var ll9=document.createElement("a")
               ll9.href=""
               ll9.innerText="Eye primer" 
           var ll10=document.createElement("a")
               ll10.href=""
               ll10.innerText="Eye Sets"     
       
               var d2=document.createElement("div")
           
               var dll=document.createElement("a")
                   dll.href=""
                   dll.innerText="Lip"
                   dll.style.fontWeight="900"
               var dll1=document.createElement("a")
                   dll1.href=""
                   dll1.innerText="Lipstick"
               var dll2=document.createElement("a")
                   dll2.href=""
                   dll2.innerText="Lip Gloss"
               var dll3=document.createElement("a")
                   dll3.href=""
                   dll3.innerText="Lip Balm & Treatment"
               var dll4=document.createElement("a")
                   dll4.href=""
                   dll4.innerText="Liquid Lipstick"
               var dll5=document.createElement("a")
                   dll5.href=""
                   dll5.innerText="Lip Stain"
               var dll6=document.createElement("a")
                   dll6.href=""
                   dll6.innerText="Lip Liner"
               var dll7=document.createElement("a")
                   dll7.href=""
                   dll7.innerText="Lip Plumper"
               var dll8=document.createElement("a")
                   dll8.href=""
                   dll8.innerText="Lip Sets"    
                   var d3=document.createElement("div")
           
                   var d1ll=document.createElement("a")
                       d1ll.href=""
                       d1ll.innerText="Cheek"
                       d1ll.style.fontWeight="900"
                   var d1ll1=document.createElement("a")
                       d1ll1.href=""
                       d1ll1.innerText="Blush"
                   var d1ll2=document.createElement("a")
                       d1ll2.href=""
                       d1ll2.innerText="Bronzer"
                   var d1ll3=document.createElement("a")
                       d1ll3.href=""
                       d1ll3.innerText="Cheek Pallets"
                   var d1ll4=document.createElement("a")
                       d1ll4.href="";
                       d1ll4.style.fontWeight="900"
                       d1ll4.innerText="Value & Gift Sets"
                   var d1ll5=document.createElement("a")
                       d1ll5.href="";
                       d1ll5.style.fontWeight="900"
                       d1ll5.innerText="Makeup Palettes"
                   var d1ll6=document.createElement("a")
                       d1ll6.href="";
                       d1ll6.style.fontWeight="900"
                       d1ll6.innerText="Brushes & Applications"
                   var d1ll7=document.createElement("a")
                       d1ll7.href="";
                       d1ll7.style.fontWeight="900"
                       d1ll7.innerText="Accessories"
                   var d1ll8=document.createElement("a")
                       d1ll8.href="";
                       d1ll8.style.fontWeight="900"
                       d1ll8.innerText="Nail"    
         
                       var d4=document.createElement("div")
           
                       var d2ll=document.createElement("a")
                           d2ll.href=""
                           d2ll.innerText="New"
                           d2ll.style.fontWeight="900"
                       var d2ll1=document.createElement("a")
                           d2ll1.href="";
                           d2ll1.style.fontWeight="900"
                           d2ll1.innerText="Bestsellers"
                       var d2ll2=document.createElement("a")
                           d2ll2.href="";
                           d2ll2.style.fontWeight="900"
                           d2ll2.innerText="Clean Makeup"
                       var d2ll3=document.createElement("a")
                           d2ll3.href=""
                           d2ll3.style.fontWeight="900"
                           d2ll3.innerText="Vegan Makeup"
                       var d2ll4=document.createElement("a")
                           d2ll4.href=""
                           d2ll4.innerText="Mini Size"
                           d2ll4.style.fontWeight="900"
                       var d2ll5=document.createElement("a")
                           d2ll5.href=""
                           d2ll5.innerText="Value Size"
                           d2ll5.style.fontWeight="900" 
                       var d2l6=document.createElement("a")
                           d2l6.href=""
                           d2l6.innerText="Sephora Collection"
                           d2l6.style.fontWeight="900"
                       
                           var d5=document.createElement("div")
           
                           var d3ll=document.createElement("a")
                               d3ll.href=""
                               d3ll.innerText="help Me choose"
                               d3ll.style.fontWeight="900"
                           var d3ll1=document.createElement("a")
                               d3ll1.href=""
                               d3ll1.innerText="Foundqation quiz"
                           var d3ll2=document.createElement("a")
                               d3ll2.href=""
                               d3ll2.innerText="Lip Quiz"
                           var d3ll3=document.createElement("a")
                               d3ll3.href=""
                               d3ll3.innerText="Brow Quiz" 
                               var d6=document.createElement("div")
           
                               var d4ll=document.createElement("a")
                                   d4ll.href=""
                                   d4ll.innerText="New"
                                   d4ll.style.fontWeight="900"
                               var d4ll1=document.createElement("a")
                                   d4ll1.href="";
                                   d4ll1.style.fontWeight="900"
                                   d4ll1.innerText="Bestsellers"
                               var d4ll2=document.createElement("a")
                                   d4ll2.href="";
                                   d4ll2.style.fontWeight="900"
                                   d4ll2.innerText="Clean Makeup"
                               var d4ll3=document.createElement("a")
                                   d4ll3.href=""
                                   d4ll3.style.fontWeight="900"
                                   d4ll3.innerText="Vegan Makeup"
                               var d4ll4=document.createElement("a")
                                   d4ll4.href=""
                                   d4ll4.innerText="Mini Size"
                                   d4ll4.style.fontWeight="900"
                               var d4ll5=document.createElement("a")
                                   d4ll5.href=""
                                   d4ll5.innerText="Value Size"
                                   d4ll5.style.fontWeight="900" 
                               var d4l6=document.createElement("a")
                                   d4l6.href=""
                                   d4l6.innerText="Sephora Collection"
                                   d4l6.style.fontWeight="900"       
      
       d.append(l,dl,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10)
       d1.append(ll,ll1,ll2,ll3,ll4,ll5,ll6,ll7,ll8,ll9,ll10)

       d2.append(dll,dll1,dll2,dll3,dll4,dll5,dll6,dll7,dll8)
       d3.append(d1ll,d1ll1,d1ll2,d1ll2,d1ll3,d1ll4,d1ll5,d1ll6,d1ll7,d1ll8)
      
       d4.append(d2ll,d2ll1,d2ll2,d2ll3,d2ll5,d2l6)
       d5.append(d3ll,d3ll1,d3ll2,d3ll3)
      d6.append(d4ll,d4ll1,d4ll2,d4ll3,d4ll4,d4ll5,d4l6)
 
 
       data.append(d,d1,d2,d3,d4,d5,d6)
      
   }

   function mini(){
    if (document.querySelector("#newm").innerText!=""){
      document.querySelector("#newm").innerText="";
    }
    
      var data=document.querySelector("#newm")
      var d=document.createElement("div")
      d.setAttribute("id","al_new_m")
      var l=document.createElement("a")
      l.href=""
      l.innerText="All New"
      var l1=document.createElement("a")
          l1.href=""
          l1.innerText="just droped"
      var l2=document.createElement("a")
          l2.href=""
          l2.innerText="New Makeup"
      var l3=document.createElement("a")
          l3.href=""
          l3.innerText="New Skincare"
      var l4=document.createElement("a")
          l4.href=""
          l4.innerText="New Haircare"
      var l5=document.createElement("a")
          l5.href=""
          l5.innerText="New Fargrance"
      var l6=document.createElement("a")
          l6.href=""
          l6.innerText="New Bath& Body"
      var l7=document.createElement("a")
          l7.href=""
          l7.innerText="New Tool & Brushes"
  
          var d1=document.createElement("div")
          d1.setAttribute("id","al_new_m1")
          var ll=document.createElement("a")
              ll.href=""
              ll.innerText="All New"
          var ll1=document.createElement("a")
              ll1.href=""
              ll1.innerText="just droped"
          var ll2=document.createElement("a")
              ll2.href=""
              ll2.innerText="New Makeup"
          var ll3=document.createElement("a")
              ll3.href=""
              ll3.innerText="New Skincare"
          var ll4=document.createElement("a")
              ll4.href=""
              ll4.innerText="New Haircare"
      
              var d2=document.createElement("div")
              d2.setAttribute("id","al_new_mi")
              var img=document.createElement("img");
              img.src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-site-global-navigation-button-evergreen-crossworld-minis.jpg?imwidth=294"
              var img1=document.createElement("img");
              img1.src="https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=294"
     
      d.append(l,l1,l2,l3,l4,l5,l6,l7)
      d1.append(ll,ll1,ll2,ll3,ll4)
      d2.append(img,img1)
      data.append(d,d1,d2)
     
  }
  function sale(){
    if (document.querySelector("#newm").innerText!=""){
      document.querySelector("#newm").innerText="";
    }
    
      var data=document.querySelector("#newm")
      var d=document.createElement("div")
      d.setAttribute("id","al_new_m")
      var l=document.createElement("a")
      l.href=""
      l.innerText="All New"
      var l1=document.createElement("a")
          l1.href=""
          l1.innerText="just droped"
      var l2=document.createElement("a")
          l2.href=""
          l2.innerText="New Makeup"
      var l3=document.createElement("a")
          l3.href=""
          l3.innerText="New Skincare"
      var l4=document.createElement("a")
          l4.href=""
          l4.innerText="New Haircare"
      var l5=document.createElement("a")
          l5.href=""
          l5.innerText="New Fargrance"
      var l6=document.createElement("a")
          l6.href=""
          l6.innerText="New Bath& Body"
      var l7=document.createElement("a")
          l7.href=""
          l7.innerText="New Tool & Brushes"
  
          var d1=document.createElement("div")
          d1.setAttribute("id","al_new_m1")
          var ll=document.createElement("a")
              ll.href=""
              ll.innerText="All New"
          var ll1=document.createElement("a")
              ll1.href=""
              ll1.innerText="just droped"
          var ll2=document.createElement("a")
              ll2.href=""
              ll2.innerText="New Makeup"
          var ll3=document.createElement("a")
              ll3.href=""
              ll3.innerText="New Skincare"
          var ll4=document.createElement("a")
              ll4.href=""
              ll4.innerText="New Haircare"
      
              var d2=document.createElement("div")
              d2.setAttribute("id","al_new_mi")
              var img=document.createElement("img");
              img.src="https://www.sephora.com/contentimages/meganav/large/slotting-sale-generic-site-desktop-global-navigation-button_copy-only.jpg?imwidth=294"
              var img1=document.createElement("img");
              img1.src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-beauty-offers-abundance.jpg?imwidth=294"
     
      d.append(l,l1,l2,l3,l4,l5,l6,l7)
      d1.append(ll,ll1,ll2,ll3,ll4)
      d2.append(img,img1)
      data.append(d,d1,d2)
     
  }
  function under(){
    if (document.querySelector("#newm").innerText!=""){
      document.querySelector("#newm").innerText="";
    }
    
      var data=document.querySelector("#newm")
      var d=document.createElement("div")
      d.setAttribute("id","al_new_m")
      var l=document.createElement("a")
      l.href=""
      l.innerText="All New"
      var l1=document.createElement("a")
          l1.href=""
          l1.innerText="just droped"
      var l2=document.createElement("a")
          l2.href=""
          l2.innerText="New Makeup"
      var l3=document.createElement("a")
          l3.href=""
          l3.innerText="New Skincare"
      var l4=document.createElement("a")
          l4.href=""
          l4.innerText="New Haircare"
      var l5=document.createElement("a")
          l5.href=""
          l5.innerText="New Fargrance"
      var l6=document.createElement("a")
          l6.href=""
          l6.innerText="New Bath& Body"
      var l7=document.createElement("a")
          l7.href=""
          l7.innerText="New Tool & Brushes"
  
          var d1=document.createElement("div")
         
          var ll=document.createElement("a")
              ll.href=""
              ll.innerText="Sophera Collection under $20"
              ll.style.fontWeight=900;
          var ll1=document.createElement("a")
              ll1.href=""
              ll1.innerText="just droped"
          var ll2=document.createElement("a")
              ll2.href=""
              ll2.innerText="New Makeup"
          var ll3=document.createElement("a")
              ll3.href=""
              ll3.innerText="New Skincare"
          var ll4=document.createElement("a")
              ll4.href=""
              ll4.innerText="New Haircare"
      
              var d2=document.createElement("div")
              d2.setAttribute("id","al_new_mi")
              var img=document.createElement("img");
              img.src="https://www.sephora.com/contentimages/meganav/large/2022-04-29-sc-instabrow-site-desktop-global-navigation-button-beauty-under-20-us.jpg?imwidth=294"
              
      d.append(l,l1,l2,l3,l4,l5,l6,l7)
      d1.append(ll,ll1,ll2,ll3,ll4)
      d2.append(img)
      data.append(d,d1,d2)
     
  }
function signupfun(){
   
    var sign=document.createElement("div")
    sign.setAttribute("id","signbox")
    var close=document.createElement("h1")
    close.setAttribute("id","close")
    close.innerText="X"
    close.addEventListener("click",closefun)
    function closefun(){
     document.querySelector("#signbox").remove();
    }
    var s=document.createElement("h3")
    s.innerText="Sign in to sephora"
    var email=document.createElement("input")
    email.setAttribute("class","signbox_input")
    email.placeholder="email Address*"
    email.setAttribute("id","email")
    var pswrd=document.createElement("input")
    pswrd.setAttribute("class","signbox_input")
    pswrd.placeholder="Password*"
    pswrd.type="password"
    pswrd.setAttribute("id","pswrd")
    var keep=document.createElement("div")
    keep.setAttribute("id","keep")
    var lkeep=document.createElement("div")
    lkeep.setAttribute("id","lkeep")
    var ksign=document.createElement("input")
    ksign.type="checkbox"
    ksign.setAttribute("id","check")
    var ksignin=document.createElement("h4")
    ksignin.innerText="Keep me signed in"
    var info=document.createElement("i")
    info.setAttribute("class","fa-solid fa-circle-info")
    
    var rkeep=document.createElement("h4")
    rkeep.setAttribute("id","rkeep")
    rkeep.innerText="Forgot password?"

    var signin=document.createElement("h3")
    signin.innerText="Sign In"
    signin.addEventListener("click",signinf)
    
    signin.setAttribute("id","signbox_signin")
    var line=document.createElement("hr")
    line.setAttribute("id","line")
    var newto=document.createElement("h3")
    newto.innerText="New to Sephora?"
    var create=document.createElement("h3")
    create.setAttribute("id","create")
    create.innerText="Create Account"
    create.addEventListener("click",createfun)
    

    sign.append(close,s,email,pswrd,keep,signin,line,newto,create)
    keep.append(lkeep,rkeep)
    lkeep.append(ksign,ksignin,info)
    document.querySelector("#ubody").append(sign)


}
function createfun(){
    document.querySelector("#signbox").innerHTML="";
    var close=document.createElement("h1")
    close.setAttribute("id","close")
    close.innerText="X"
    close.addEventListener("click",closefun)
    function closefun(){
     document.querySelector("#signbox").remove();
    }
    var createa=document.createElement("h2")
    createa.innerText="Create an Account";
    var hr=document.createElement("hr")
    var bi=document.createElement("img")
    bi.setAttribute("id","bi")
    bi.src="https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg"
    var name=document.createElement("div")
    name.setAttribute("id","name")
    var first=document.createElement("input")
    first.placeholder="First Name"
    first.setAttribute("id","first")
    var last=document.createElement("input")
    last.placeholder="Last Name"
    name.append(first,last)

    var email=document.createElement("input")
    email.setAttribute("class","signbox_input")
    email.setAttribute("id","email")
    email.placeholder="Email Address"
  var pwd=document.createElement("input")
  pwd.placeholder="Password (6 to12 charcters)"
 pwd.setAttribute("class","signbox_input")
 pwd.setAttribute("id","pwd")
 pwd.type="password"

  var phn=document.createElement("input")
  phn.placeholder="Phone Number (optional)"
  phn.setAttribute("class","signbox_input")

  var birthday=document.createElement("div")
  birthday.setAttribute("id","birthday")
  var cake=document.createElement("img")
  cake.src="https://www.sephora.com/img/ufe/icons/birthday.svg"
  var gift=document.createElement("span")
  gift.innerText="Enter your birthdate to receive a free gift every year."
  birthday.append(cake,gift)
  var date=document.createElement("div")
  date.setAttribute("id","date")
  var month=document.createElement("input")
  month.placeholder="Month"
  var day=document.createElement("input")
      day.placeholder="Day"
  date.append(month,day)

  var zip=document.createElement("input")
  zip.setAttribute("class","signbox_input")

      zip.placeholder="Zip Code (to hear about store events near you)"
     
      var keep=document.createElement("div")
      keep.setAttribute("id","lkeep")
     
      var ksign=document.createElement("input")
      ksign.type="checkbox"
      ksign.setAttribute("id","check")
      var ksignin=document.createElement("h4")
      ksignin.innerText="Keep me signed in"
      var info=document.createElement("i")
      info.setAttribute("class","fa-solid fa-circle-info")

      var create=document.createElement("h3")
      create.setAttribute("id","create")
      create.innerText="Join Now"
      create.addEventListener("click",joinfun)

      var hr1=document.createElement("hr")
      
      var p1=document.createElement("p")
      p1.innerText="By clicking “Join Now” you acknowledge that you are a U.S. or Canada resident and (1) have read Sephora’s Privacy Policy and Notice of Financial Incentive, (2), agree to Terms of Use, Beauty Insider Terms, and to automatically receive Beauty Insider offers and notifications via email."
      var p2=document.createElement("p")
      p2.innerText="Sephora uses Google ReCaptcha and by registering, users are subject to Google’s privacy policy & terms."

keep.append(ksign,ksignin,info)
    document.querySelector("#signbox").append(close,createa,hr,bi,name,email,pwd,phn,birthday,date,zip,keep,create,hr1,p1,p2)
}

