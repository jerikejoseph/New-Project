


document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const name=document.getElementById("username").value
    const email=document.getElementById("Email").value
    const password=document.getElementById("Password").value
    const cpassword=document.getElementById("confirm Password").value
    console.log(name,email,password,cpassword);

    await fetch("http://localhost:3000/api/signUp",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,email,password,cpassword})
    })
        if(res.status==201){
            alert("Succes")
            window.location.href="../index.html"
        }
        else{
            alert("failed")
        }
    })
