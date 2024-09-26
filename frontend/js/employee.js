document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();
    // console.log("hii");
    const empid=document.getElementById("ID").value
    const name=document.getElementById("name").value
    const salary=document.getElementById("salary").value
    const experience=document.getElementById("experience").value
    const designation=document.getElementById("designation").value
    const phone=document.getElementById("phone").value
    const email=document.getElementById("email").value
    const profile=document.getElementById("profile").value
   
    console.log(empid,name,age,salary,experience,designation,phone,email,profile);
        

    await fetch("http://localhost:3000/api/addEmployee",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({empid,name,age,salary,experience,designation,phone,email,profile}),
    }).then((res)=>{
        console.log(res.status); 
        if(res.status==201){
            alert("Success")
            window.location.href="../index.html"

        }
        else{
            alert("Unable to Save Data")
        }
    }).catch((error)=>{
        
        console.log(error);
        
    })
})