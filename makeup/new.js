function Menu(name,category,url,color,price,star){
    this.name=name;
    this.category=category;
    this.star = star
    this.url=url;
    this.color=color;
    this.price=price;
   }
  
  
      
     var data=[];
  
     let item1= new Menu("Insta-Brow Waxy Brow Pencil","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2525251-main-zoom.jpg?imwidth=612","21 Colors","$20.00")
     let item2= new Menu("Boost + Lock Eyeshadow Primer","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2546372-main-zoom.jpg?imwidth=612","15 Colors","$12.00")
     let item3= new Menu("Cream Lip Stain Liquid Lipstick","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s1296060-main-zoom.jpg?imwidth=612","77 Colors","$3.00")
     let item4= new Menu("Astrology Lip Stories Lipstick","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2364479-main-zoom.jpg?imwidth=612","12 Colors","$6.00 $9.00")
     let item5= new Menu("Insta-Brow Waxy Brow Pencil","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2546646-main-zoom.jpg?imwidth=612","13 Colors","$12.00")
     let item6= new Menu("Retractable Waterproof Eyeliner","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2529469-main-zoom.jpg?imwidth=612","19 Colors","$13.00")
     let item7= new Menu("#LIPSTORIES Lipstick","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2529451-main-zoom.jpg?imwidth=612","59 Colors","$6.00 $9.00")
     let item8= new Menu("Tattoo Pencil Liner Waterproof Long-Wear Gel Eyeliner","KVD Beauty","https://www.sephora.com/productimages/sku/s2594406-main-zoom.jpg?imwidth=612","7 Colors","$38.00")
     let item9= new Menu("Liquid Touch Brightening Concealer","Rare Beauty by Selena Gomez","https://www.sephora.com/productimages/sku/s2586717-main-zoom.jpg?imwidth=612","11 Colors","$20.00")
     let item10= new Menu("Perfect Strokes Universal Volumizing Mascara","Rare Beauty by Selena Gomez","https://www.sephora.com/productimages/sku/s2577062-main-zoom.jpg?imwidth=612","5 Colors","$11.00 - $20.00")
     let item11= new Menu("Liquid Touch Brightening Concealer","Rare Beauty by Selena Gomez","https://www.sephora.com/productimages/sku/s2462877-main-zoom.jpg?imwidth=612","48 Colors","$19.00")
     let item12= new Menu("Positive Light Liquid Luminizer Highlight","Rare Beauty by Selena Gomez","https://www.sephora.com/productimages/sku/s2529451-main-zoom.jpg?imwidth=612","8 Colors","$22.00")
     let item13= new Menu("Stay Vulnerable Melting Cream Blush","Rare Beauty by Selena Gomez","https://www.sephora.com/productimages/sku/s2514289-main-zoom.jpg?imwidth=612","5 Colors","$21.00")
     let item14= new Menu("Eaze Drop Blurring Skin Tint","Fenty Beauty by Rihanna","https://www.sephora.com/productimages/sku/s2386902-main-zoom.jpg?imwidth=612","9 Colors","$15.00")
     let item15= new Menu("Lip Liner To Go","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2553352-main-zoom.jpg?imwidth=612","12 Colors","$6.00")
     let item16= new Menu("Colorful Eyeshadow","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2578094-main-zoom.jpg?imwidth=612","15 Colors","$8.00")
     let item17= new Menu("Army of Love Makeup Essentials Set","Too Faced","https://www.sephora.com/productimages/sku/s2567774-main-zoom.jpg?imwidth=612","14 Colors","$39.00")
     let item18= new Menu("Colorful Eyeshadow ","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2577484-main-zoom.jpg?imwidth=612","28 Colors","$07.00")
     let item19= new Menu("Hy-Power Eye, Cheek & Lip Pigment Paint","HAUS LABS BY LADY GAGA","https://www.sephora.com/productimages/sku/s2220010-main-zoom.jpg?imwidth=612","20 Colors","$24.00")
     let item20= new Menu("Radiant Creamy Concealer","NARS","https://www.sephora.com/productimages/sku/s2582385-main-zoom.jpg?imwidth=612","30 Colors","$14.00 - $31.00")
     let item21= new Menu("12 Hour Contour Pencil Eyeliner","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2519122-main-zoom.jpg?imwidth=612","21 Colors","$11.00")
     let item22= new Menu("Match Stix Matte Contour Skinstick","Fenty Beauty by Rihanna","https://www.sephora.com/productimages/sku/s2580025-main-zoom.jpg?imwidth=612","07 Colors","$14.00 - $28.00")
     let item23= new Menu("Lip Sleeping Mask with Hyaluronic ","LANEIGE","https://www.sephora.com/productimages/sku/s2520260-main-zoom.jpg?imwidth=612","5 Colors","$22.00 - $24.00")
     let item24= new Menu("Power Move Hydrating Soft Matte Lipstick","Bite Beauty","https://www.sephora.com/productimages/sku/s2563484-main-zoom.jpg?imwidth=612","16 Colors","$14.00 $28.00")
     let item25= new Menu("Retractable Brow Pencil - Waterproof","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2555605-main-zoom.jpg?imwidth=612","12 Colors","$12.00")
     let item26= new Menu("Lip Cheat Lip Liner","Charlotte Tilbury","https://www.sephora.com/productimages/sku/s2527125-main-zoom.jpg?imwidth=612","15 Colors","$15.00")
     let item27= new Menu("Power Move Hydrating Soft Matte Lipstick","Bite Beauty","https://www.sephora.com/productimages/sku/s2578920-main-zoom.jpg?imwidth=612","16 Colors","$14.00 $28.00")
     let item28= new Menu("Gloss Bomb Universal Lip Luminizer","Fenty Beauty by Rihanna","https://www.sephora.com/productimages/sku/s2554913-main-zoom.jpg?imwidth=612","06 Colors","$20.00")
     let item29= new Menu("Dior Addict Lip Glow","Dior","https://www.sephora.com/productimages/sku/s2519601-main-zoom.jpg?imwidth=612","13 Colors","$35.00")
     let item30= new Menu("Perfect Strokes Universal Volumizing ","Rare Beauty by Selena Gomez","https://www.sephora.com/productimages/sku/s2571602-main-zoom.jpg?imwidth=612","08 Colors","$11.00 - $20.00")
     let item31= new Menu("Brow Wiz® Ultra-Slim Precision Brow Pencil","Anastasia Beverly Hills","https://www.sephora.com/productimages/sku/s2570356-main-zoom.jpg?imwidth=612","12 Colors","$23.00")
     let item32= new Menu("ShineOn Jelly Lip Gloss","Tower 28 Beauty","https://www.sephora.com/productimages/sku/s2548766-main-zoom.jpg?imwidth=612","11 Colors","$15.00")
     let item33= new Menu("BeachPlease Lip + Cheek Cream Blush","Tower 28 Beauty","https://www.sephora.com/productimages/sku/s2553352-main-zoom.jpg?imwidth=612","06.00","$20.00")
     let item34= new Menu("Pillow Talk Lip Wardrobe Set","Charlotte Tilbury","https://www.sephora.com/productimages/sku/s2567972-main-zoom.jpg?imwidth=612","13 Colors","$49.00")
     let item35= new Menu("Multi-Peptide Lash and Brow Serum","The Ordinary","https://www.sephora.com/productimages/sku/s2591394-main-zoom.jpg?imwidth=612","13 Colors","$14.00")
     let item36= new Menu("Poutsicle Hydrating Lip Stain","Fenty Beauty by Rihanna","https://www.sephora.com/productimages/sku/s2573467-main-zoom.jpg?imwidth=612","04 Colors","$24.00")
     let item37= new Menu("Hydrabeam Brightening + Hydrating ","Saie","https://www.sephora.com/productimages/sku/s2555100-main-zoom.jpg?imwidth=612","09 Colors","$36.00")
     let item38= new Menu("Eye Love Eyeshadow Palette","SEPHORA COLLECTION","https://www.sephora.com/productimages/sku/s2157659-main-zoom.jpg?imwidth=612","06 Colors","$09.80")
     let item39= new Menu("Multi-Stick Cream Blush + Lip Tint","ILIA","https://www.sephora.com/productimages/sku/s2564359-main-zoom.jpg?imwidth=612","14 Colors","$36.00")
     let item40= new Menu("Lip Glowy Balm","LANEIGE","https://www.sephora.com/productimages/sku/s2210482-main-zoom.jpg?imwidth=612","04 Colors","$17.00")
     let item41= new Menu("Long-Wear Cream Eyeshadow Stick","Bobbi Brown","https://www.sephora.com/productimages/sku/s2577252-main-zoom.jpg?imwidth=612","23 Colors","$30.00")
     let item42= new Menu("Limitless Lash Lengthening Mascara","ILIA","https://www.sephora.com/productimages/sku/s2335198-main-zoom.jpg?imwidth=612","04 Colors","$13.00 - $28.00")
     let item43= new Menu("Dior Addict Lip Maximizer Plumping Gloss","Dior","https://www.sephora.com/productimages/sku/s2571529-main-zoom.jpg?imwidth=612","12 Colors","$35.00")
     let item44= new Menu("Shade Slick Tinted Lip Oil","MERIT","https://www.sephora.com/productimages/sku/s2588192-main-zoom.jpg?imwidth=612","08 Colors","$24.00")
     
     
     data.push(item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17,item18,item19,item20,item21,item22,item23,item24,item25,item26,item27,item28,item29,item30,item31,item32,item33,item34,item35,item36,item37,item38,item39,item40,item41,item42,item43,item44)
  
     localStorage.setItem("macdata",JSON.stringify(data))
     var mcdata=JSON.parse(localStorage.getItem("macdata"))
     var totalorder=[] || JSON.parse(localStorage.getItem("orderlist"))
     display(mcdata)
  
  
     function sortByBrand(){
      var selected=document.querySelector("#sortbrand").value;
      console.log(selected);
      document.querySelector("#mcadata").innerHTML="";
      var filtered=mensData.filter(function (ele){
        return ele.brand==selected;
      });
      console.log(filtered);
      dataDetails(filtered);
    }
  
     function display(d){
       document.querySelector("#product").innerHTML="";
       d.forEach(function(ele) {
         let menu=document.querySelector("#product")
  
         let card=document.createElement("div");
         card.setAttribute("id","card")
         
  
         let img=document.createElement("img");
         img.setAttribute("class","image")
         img.src=ele.url;
        
  
           
         let name=document.createElement("p")
         name.innerText=ele.name
  
         let cal=document.createElement("h3")
         cal.innerText= ele.category
         cal.setAttribute("class","cal")
        
         let colors=document.createElement("p1")
         colors.innerText =ele.color
  
         let prc=document.createElement("h2")
         prc.innerText=`${ele.price}`
         
  
         card.append(img,cal,name,colors,prc)
         menu.append(card)
  
  
       });
   
     }
    