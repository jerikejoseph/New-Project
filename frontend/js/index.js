let employee

async function getEmployee(){
    console.log(".....");
    let res=await fetch("http://localhost:3000/api/getEmployee")
    // console.log(res);
    if(res.status==200){
        employees=await res.json();
        // console.log(donors.name);

        str=``
        employees.map((employee)=>{
            console.log(employee.name);
        str+=`<tr>
                        <td><div id="name">${employee.name}</div></td>
                        <td><div id="age">${employee.age}</div></td>
                        <td><div id="dob">${employee.dob}</div></td>
                        <td><div id="phone">${employee.phone}</div></td>
                        <td><div id="place">${employee.place}</div></td>
                        </td>
                        <td> <a href="./pages/editDoner.html?id=${employee._id}"><button class="edit-btn" >EDIT</button></a>
                            <button class="delete-btn"  id="dlt" onclick="deleteDonor('${employee._id}')">DELETE</button></td>

                    </tr>`
        
    })
    document.getElementById("main").innerHTML=str
    }
}
getEmployee()