import { log } from "console";


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
    }).then((res)=>{
        console.log(res);
        if(res.status==200){
            alert("Succes")
        }
        else{
            alert("failed")
        }
    })
})