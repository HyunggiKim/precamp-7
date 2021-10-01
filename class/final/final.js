
function changePhone1(){
    const phone1 = document.getElementById("phone1").value
    if(phone1.length === 3){
        document.getElementById("phone2").focus()
    }

    function changePhone2(){
    const phone2 = document.getElementById("phone2").value
    if(phone1.length === 4){
        document.getElementById("phone3").focus()
    }

}
    
    function changePhone3(){
    const phone3 = document.getElementById("phone2").value
    if(phone1.length === 4){
        document.getElementById("phone3").focus()
    }

}
}


    const token = String(Math.floor(Math.random() * 1000000)


