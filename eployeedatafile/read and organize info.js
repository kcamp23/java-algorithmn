
let fs = require('fs')

let departments = fs.readFileSync('./1_departments.txt', {encoding: 'utf8'})
let employeeAssigned = fs.readFileSync('./2_employeedepartment.txt', {encoding: 'utf8'})

let data2 = employeeAssigned.split("\n")
let data1 = departments.split("\n")

let employeeDepartment = {
departmentNumbers: [],
departmentNames: [],

}
let departmentFile ={
    employeeNumber : [],
    departmentNumber :[],
    employeeHire : [],
    employeeLeave : []
}
for (let i = 0; i < data1.length; i++) {
employeeDepartment.departmentNumbers.push(data1[i].replace(/"/g, ``).split(",")[0])
employeeDepartment.departmentNames.push(data1[i].replace(/"/g, ``).split(",")[1])
employeeDepartment.departmentNames[i] =employeeDepartment.departmentNames[i].replace(/\r/, '')
 
}

for (let i = 0; i< data2.length; i++){
departmentFile.employeeNumber.push(data2[i].replace(/"/g,'' ).split(",")[0])
departmentFile.departmentNumber.push(data2[i].replace(/"/g,'').split(",")[1])
departmentFile.employeeHire.push(data2[i].replace(/"/g,'').split(",")[2])
departmentFile.employeeLeave.push(data2[i].replace(/"/g,'').split(",")[3])
departmentFile.employeeLeave[i] = departmentFile.employeeLeave[i].replace(/\r/,'')

}


// console.log(data1[i].split(",")[0])

// console.log(departmentFile)
// // console.log(employeeDepartment)

// console.log(data1)
// console.log(data2)