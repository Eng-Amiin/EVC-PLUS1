let Balance = 300;
let pin = 2261;
let Evc = "*770#"

let Zipcode = prompt(" ")

if (Zipcode == Evc){
    pinAttempt = parseInt(prompt("Fadlan Gali pinkaaga."))
    if (pin == pinAttempt){
        SelectService = parseInt(prompt("EVCPlus\n1.Itus haragaaga \n2.Kaarka Ku Hadalka.\n3.Bixi Biilka.\n4.U Wareeji EvcPluse.\n5.Warbixin Kooban.\n6.Salaam Bank.\n7.Maareynta.\n8.Taaj.\n0.Kabax."))
    
        // section one
        if(SelectService == 1) {
            alert("Haragaagu waa" + " " + Balance )
        }
    
        // Section two 
        else if (SelectService == 2){
            var kaarka = prompt("Kaarka hadalka\n1.Ku Shubo Airtime\n2.Ugu Shub Airtime\n3.Mifi Packages\n4.Ku Shubo Internet\n5.Ugu Shub Qof Kale(MMT)")  
            if (kaarka == 1)
            {
                var money = parseInt(prompt("Fadlan Gali Lacgta"))
                var haraa = money - Balance
                var validate = prompt("Ma hubtaa inaad $" + money +"ugu shubtid?\n1.Haa\n2.Maya")
                if(validate == 1){
                    alert("[EVC-PLUS] Waxaad ku shubatay " + money + "$" + " Haragaga Xisaabta Waa"+ haraa )

                }

            }
                // else{
                //     document.write()
                // }


            // Kaar 2
            
                if(kaarka == 2)
                {
                    var Numberr = parseInt(prompt("Gali Mobile-ka Aad Lacagta Ugu Shubaysid"))
                    if(Numberr >= 610000000 && Numberr <= 619999999)
                    {    
                        var  Money = parseInt(prompt("Geli Lacagta "))
                        var Expense = Balance - Money
                        if(Money <= Balance ){

                                
                            E = prompt("Mahubtaa Inaad $" + Money + " "+ "Ugu Shubtid Number-ka " + Numberr + "\n1.Haa \n2.Maya")
                            if(E == 1){
                                alert("Waxaad Lambarkan " + "" + Numberr + "   " + "ugu shubtay" +  "    " + Money + "  "  + "Haraagagu Waa " + Expense)

                            }
                            else{
                                alert("Waana daalisay")
                            }
                    }
                    }
                }
      
         
       
    } 
    // Section three 
        else if (SelectService == 3)
        {
            paid = parseInt(prompt("Bixi Biilka\n1.Post paid\n2.Ku ibso"))
            if(paid == 1)
            {
               var post = parseInt(prompt("Post Paid\n1.Ogow Biilka\n2.Bixi Biilka\n3.Ka Bixi Biilka"))
               if(post == 1){
                   alert("error occurred,please try again later ")
               }
               if (post == 2){
                   Lacag = prompt("Fadlan Gali Lacagta")

                   Correct = Balance - Lacag

                   if(Correct < Balance ){
                      Hubin =  prompt("Ma Hubtaa Inaad Bixisid Bill Lacagtiisu Tahay:" + Lacag + "?\n1.Haa\n2.Maya")
                   }
                   if(Hubin == 1){
                       alert("Waan Hubaa sxp")
                   }
               }

            }
            else if(paid == 2)
            {
                var postpaid = parseInt(prompt("Fadlan Gali Aqooonsiga Ganacsiga"))
            }
            else{
                alert("waxbaa kaa qalada sxp")
            }
    
        }     
        // section four
        else if(SelectService == 4)
        {
            let Evc = parseInt(prompt("Uwareeji EVC-PLUS\n Fadlan Gali Lambarka aad Lacagta Udireysid"))

            if(Evc >= 610000000 && Evc <= 619999999 )
            {
                var Validate = parseInt(prompt("Fadlan Gali lacagta"))
                var menue = Balance - Validate
                if (Validate <= Balance){
                    number =prompt("Mahubtaa Inaad $" + Validate  + " " + "U Wareejisid " + Evc+"?" + "\n1.Haa\n2.Maya")
                    if(number == 1){
                        alert("[EVC-PLUS]\n Waxaad " + Validate + " " + "Uwareejisay " + Evc + " " + "Haraagagu Waa $" + menue )
                        
                    }
                    else{
                        alert("Mahadsanid Macsalaamo.")
                    }
                }

            }
            else{
                alert("waad qaladay wll")
            }
        }
    
        // section five
        else if (SelectService == 5)
        {
            warbixin = parseInt(prompt("Warbixin Kooban\n1.Last Action\n2.Wareejinta Udambsay\n3.Iibsashadii u dambeysay"))
            if(warbixin == 1 || warbixin == 2 || warbixin == 3 )
            {
                alert("Howl Ayaa Ku Socoto")
            }
        
            else{
                alert("Error")
            }
        }
            // section six
        else if (SelectService == 6)
        {
            SalaamBank = parseInt(prompt("Salaam Bank\n1.Ka Wareeji EVCPLUS"))
            if(SalaamBank == 1){
                v =parseInt(prompt("Fadlan Dooro Xisaabta Bankiga.\n1.Salaam Somali Bank.\n2.Salaam sch."))
                if(v==1){
                    n = prompt("(Fadlan Gali Account-ga)")
                    n2 = prompt("Gali Faahfahin")
                    n3 = prompt("Fadlan Gali Lacgta.")
                    n4 = prompt("[SALAAM BANK]" + "\n Mahubtaa Inaad Kudirto  (Jamhuuriya University )" + n3 + " " + n + "\n 1.Haa" + "\n 2.Maya")
                    Mines = Balance - n3
                    if(n4 == 1){
                        alert("[SALAAM-BANK] \n Waxaad $ " + n3 + " Kudirtay  Account-ga " + n + "   Haragaagu Waa " + Mines)
                    }
                    else{
                        alert("Mahadsanid Macsalaama.")
                    }

                }
                if(v == 2){
                    alert("This Is Not Currently Working")
                }
                    
              
            }
          


            
        }
        // section seven
        else if (SelectService == 7)
        {
            Mareynta = parseInt(prompt("Maareynta\n1.Badal Lambarka sirta\n2.Badal Luqada\n3.Wargelin Mobile Lumay"))
            if (Mareynta == 1){
                V = parseInt(prompt("Fadlan Gali Pin-ka Cusub"))
                Kuceli = parseInt(prompt("Fadlan Ku Celi Pin-ka Cusub"))
                if(V == Kuceli){
                    Lambarki_Hore = prompt("Gali Numberkaga Sirta")
                }
                else{
                    alert("Invalid Confirmation")
                }

                    if(Lambarki_Hore == pin){
                        alert("Waxaad Ku Guuleysatey Inaad Badasho Lambar-kaga Sirta ah")

                    }
                        
                    else{
                        alert("Lambarka aad Galisay Waa Qalad")

                    }
        }

        //   TWo
            if(Mareynta == 2){
                Luqad = prompt("1.English\n2.Arabic")
                if(Luqad == 1 || 2){
                    alert("Waad Badashay Luqada.")
                }
                
            }

            // Three 
            if(Mareynta == 3){
                MobileL = prompt("Fadlan Gali Mobile Lumay.")
                fadlan = prompt("Fadlan Gali Lambar-kiisa Sirta ah ")
                Ma_hubtaa = prompt("Mahubtaa InaadU Diwaan Geliso Numberk-Kaan" + " " + MobileL +  "1.Haa\2.Maya ")
                if(Ma_hubtaa == 1){
                    alert("Wabaaaaaa")
                }
                else{
                    alert("")
                }
            }
                
           
        }

        // Section Eight
        else if (SelectService == 8)
        {
            taaj = parseInt(prompt("Taaj\n1.Dibada\n2.Ogow Khidmada\n3.Maclumadka Xawalada"))
            if(taaj == 1)
            {
                Telefonka  = parseInt(prompt("Fadlan Gali Telefanka Qaataha."))
                Magaca = prompt("Fadlan GAli Magaca Qaataha")
                Maagalo = prompt("Fadlan Gali Magaalada Qaataha Uu Joogo")
                Lacag = prompt("Fadlan Gali Lacagta")
                Maclumaad = prompt("Fadlan Gali Macluumaad")
                Khidmad = prompt("Khidmada Ma Xisaabtada Ayaa Laga Jarayaa?\n1.Haa\n2.Maya")
                if(Khidmad == 1 ){
                    Hubin =parseInt(prompt("Mahubtaa Inaad  $" + ' '+  Lacag + " " + "Udirtid "+ " " + Magaca + " " + "Oo Wata Telphonka \n" + Telefonka + " \n1.Haa" + "\n2.Maya" ))
                   
                }
                else if(Khidmad == 2){
                    alert("Program Terminating.")
                }
                Kajar = Balance - Lacag
                if(Hubin == 1){
                    alert("[Taaj]\n" + "Waxaad " + " " + Lacag + " " + "Udirtay" + " " + Magaca + " " + " Oo Wata" + " " + Telefonka + " " + "\nHaragagu Waa " + "$"+Kajar)
                }
                else{
                    alert("Mahadsanid Macsalaama.")
                }
    
            }
            if(taaj == 2){
                alert("Howl Ayaa Ku Socoto")
            }
            if(taaj == 3){
                alert("Howl Ayaa Ku Socoto")
            }
           

            else{
                alert("Error")
            }
        }
        
        if(SelectService == 0){
            alert("Macsalaamo")
        }

     
}
else{
    alert("Pinka Aad Galisay Waa Qalad.")
}
}         



else{
    alert("waxa aaad galisay waa qalad.")
}