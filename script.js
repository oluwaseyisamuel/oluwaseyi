function calcs(){
   if (dath.value =="" || dati.value =="" || datk.value =="" ||datu.value =="" ||item1.value== "" || item2.value== "" ||item3.value==""|| item4.value=="" ||one.value=="" || two.value=="" || three.value=="" ||four.value =="" ){
        errs.style.display="block"
   }else{
         errs.style.display ="none"
         var confirmation = confirm("Do you want to proceed")
            if (confirmation ==true){
            var sum = Number(one.value) + Number(two.value) + Number(three.value) + Number(four.value) 
            var total = (sum)
            if (one.value>10000 || two.value>10000 || three.value>10000|| four.value>10000) {
                alert("Nana you wan dey over spend abi")   
            }else{
                intro.innerHTML = "Nana Omo Baba Olowo" + nanaDate.value
                note.innerHTML = "This is your budget list and make sure you are not spending more than #10000 per day"  
                if (total >=0 && total<10000){
                    result.innerHTML ="Total Money Spent is  #" + total                                             
                }
            }
        } 
    }       document.getElementById("nanaDate").value=""
 
}
