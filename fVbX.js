let fS = document.getElementById("flagSubmit")
fS.addEventListener("click", function(){
    let f = document.getElementById("flag")
    if(f.value=="HVctf{Y0u_g0T-th3_D4tA}"){
        alert("Hacked!\n Access Granted to next level.")
        let chg = document.getElementById("chgBtn")
        chg.setAttribute("href", "#2")
        chg.innerHTML = "Access Granted!"
    }else{
        alert("Wrong Flag")
    }
})
