let frm = document.getElementById("frm")
let i1 = document.getElementById("i1").value
let i2 = document.getElementById("i2").value
let btn = document.getElementById("btn")
let hd = document.getElementById("hd")
let tbody = document.getElementById("tbody")
//dataset
let data = [
    { name: "jd", age: 13 },
    { name: "nivi", age: 23 },
]
//(R)READ
function readdata() {
    tbody.innerHTML = ""
    data.map((e, i) => {
        // console.log(e.name)
        // console.log(e.age)
        let tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td><button onclick="deletedata(${i})">delete</button></td>
        <td><button onclick="editdata(${i})">edit</button></td>
                 `
        tbody.append(tr)
    })
}
readdata()
//add
let editIndex = null
frm.addEventListener // add function
    ("submit", (e) => {
        e.preventDefault()//
        let i1 = document.getElementById("i1").value
        let i2 = document.getElementById("i2").value
        let obj = {
            name: i1,
            age: i2
        }
        if (editIndex == null) {
            data.push(obj);
        }
        else {
            // update
            data[editIndex] = obj // data insert
            editIndex = null
            document.getElementById("btn").innerHTML = "Save"
            document.getElementById("hd").innerHTML = "Crud Operation"
        }
        readdata()
        frm.reset()
    })
// delete
function deletedata(i) {
    if (window.confirm("Are you Sure")) {
        // console.log(i);
        data.splice(i, 1)//splice(index no, how many elements are want to delete)
        readdata()
        frm.reset()
    }
}
// edit
function editdata(i) {
    // console.log(data[i].name);
    // console.log(data[i].age);
    document.getElementById("i1").value = data[i].name
    document.getElementById("i2").value = data[i].age
    document.getElementById("btn").innerHTML = "Update"
    document.getElementById("hd").innerHTML = "Update Form"
    editIndex = i
}