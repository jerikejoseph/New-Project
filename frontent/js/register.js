document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();
    // console.log("hii");
    const name=document.getElementById("name").value
    const phone=document.getElementById("phone").value
    const email=document.getElementById("email").value
    const Address1=document.getElementById("address1").value
    const Address2=document.getElementById("address2").value
    const pin=document.getElementById("pin").value
    const password=document.getElementById("password").value
    const cpassword=document.getElementById("confirm-password").value
    console.log(name,phone,email,Address1,Address2,pin,password,cpassword);



    await fetch("http://localhost:3000/api/adduser",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,phone,email,Address1,Address2,pin,password,cpassword}),
    }).then((res)=>{
        console.log(res);
        
        if(res.status==201){
            alert("Success")
            window.location.href="./login.html"

        }
        else{
            alert("Failed")
        }
    }).catch((error)=>{
        
        console.log(error);
        
    })
})




// validation

function validatePhone(phone){
    // console.log(phone);
    let regEx=/^[6-9]\d{9}/
    console.log(regEx.test(phone));
    
    if ((regEx.test(phone))){
        document.getElementById("phone").textContent=""
    }
    else{
        document.getElementById("phn").textContent="Phone Number Is Invalid"
        document.getElementById("phn").style.color="red"
        document.getElementById("phn").style.fontSize=12+"px"
        document.getElementById("phn").style.fontWeight="bold"




    }
    document.getElementById("phone").addEventListener("keyup", function() {
        if (document.getElementById("phone").value== "") {
            document.getElementById("phone").textContent = "";
        }
    });



}