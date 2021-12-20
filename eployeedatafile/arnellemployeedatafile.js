let fs = require("fs");

let employeeDepartmentData = {
  departmentNumbers: [],
  departmentNames: [],
};

//read file 1 - 1_departments.txt
let departments = fs.readFileSync("./1_departments.txt", { encoding: "utf8" });

let deptData1 = departments.replace(/"/g, "").split("\n");

for (let i = 0; i < deptData1.length; i++) {
  employeeDepartmentData.departmentNumbers.push(deptData1[i].split(",")[0]);
  employeeDepartmentData.departmentNames.push(deptData1[i].split(",")[1]);
}

//read file 2 - 2_employeedepartment.txt
let employeeDepartment = fs.readFileSync("./2_employeedepartment.txt", {
  encoding: "utf8",
});

employeeDepartmentData.employeeId = [];
employeeDepartmentData.hireStartDate = [];
employeeDepartmentData.hireDateStatus = [];

for (let i = 0; i < employeeDepartmentData.departmentNumbers.length; i++) {
  employeeDepartmentData.employeeId.push([]);
  employeeDepartmentData.hireStartDate.push([]);
  employeeDepartmentData.hireDateStatus.push([]);
}

let employeeData2 = employeeDepartment.replace(/"/g, "").split("\n");

for (let i = 0; i < employeeData2.length; i++) {
  // 10001,"d005","1986-06-26","9999-01-01"
  // if (employeeData2[i].split(",")[1] == employeeDepartmentData.departmentNumbers[i])
  // console.log(employeeData2[i].split(",")[1][3]) // 5

  // 10001,"d005","1986-06-26","9999-01-01"

  employeeDepartmentData.employeeId[employeeData2[i].split(",")[1][3] - 1].push(
    employeeData2[i].split(",")[0]
  );

  employeeDepartmentData.hireStartDate[
    employeeData2[i].split(",")[1][3] - 1
  ].push(employeeData2[i].split(",")[2]);

  employeeDepartmentData.hireDateStatus[
    employeeData2[i].split(",")[1][3] - 1
  ].push(employeeData2[i].split(",")[3]);
}

//read file 3 - 3_employees.txt

let employees = fs.readFileSync("./3_employees.txt", { encoding: "utf8" });
let employeesData3 = employees.replace(/"/g, "").split("\n");

// need to create: dob, firstName, lastName, gender,
// let employeeDepartmentData = {
//   dob: [ [], [], [], [], ["1953-09-02", ], [], [], [], [] ],
employeeDepartmentData.dob = [];
employeeDepartmentData.firstName = [];
employeeDepartmentData.lastName = [];
employeeDepartmentData.gender = [];
//   firstName: [ [], [], [], [], [], [], [], [], [] ],
//   lastName: [ [], [], [], [], [], [], [], [], [] ],
//   gender: [ [], [], [], [], [], [], [], [], [] ],
// }

for (let i = 0; i < employeeDepartmentData.departmentNumbers.length; i++) {
  employeeDepartmentData.dob.push([]);
  employeeDepartmentData.firstName.push([]);
  employeeDepartmentData.lastName.push([]);
  employeeDepartmentData.gender.push([]);
}

for (let i = 0; i < employeesData3.length; i++) {
  // reading from the file #3 data
  // console.log(`employees data current id: ${employeesData3[i].split(",")[0]}`)  // 10001

  // iterate through all of the employee ids inside of employeeDepartmentData.employeeId
  for (let j = 0; j < employeeDepartmentData.employeeId.length; j++) {
    for (let k = 0; k < employeeDepartmentData.employeeId[j].length; k++) {
      // console.log(`J loop is ${j}, ${employeeDepartmentData.employeeId[j][k]}`)

      if (
        employeesData3[i].split(",")[0] ==
        employeeDepartmentData.employeeId[j][k]
      ) {
        employeeDepartmentData.dob[j].push(employeesData3[i].split(",")[1]);
        employeeDepartmentData.firstName[j].push(
          employeesData3[i].split(",")[2]
        );
        employeeDepartmentData.lastName[j].push(
          employeesData3[i].split(",")[3]
        );
        employeeDepartmentData.gender[j].push(employeesData3[i].split(",")[4]);
      }
    }
  }

  // console.log(employeesData3[i].split(",")[0]);
}

//read file 4 - 4_employeesalaries.txt

let employeeSalaries = fs.readFileSync("./4_employeesalaries.txt", {
  encoding: "utf8",
});
let employeeSalaryData4 = employeeSalaries.replace(/"/g, "").split("\n");

employeeDepartmentData.salaries = [];

for (let i = 0; i < employeeDepartmentData.departmentNumbers.length; i++) {
  employeeDepartmentData.salaries.push([]);
}

for  (let i = 0; i < employeeSalaryData4.length - 1; i++) {
    if (employeeSalaryData4[i].split(",")[0] != employeeSalaryData4[i + 1].split(",")[0] ) {
        console.log(employeeSalaryData4[i].split(",")[0]);
        console.log(` - ${employeeSalaryData4[i].split(",")[1]}`);

    }

}

let empDataLenth = employeeSalaryData4.length;
// console.log(empDataLenth)

for (let i = empDataLenth - 2; i >= 0; i--) {
  if (
    employeeSalaryData4[i].split(",")[0] !=
    employeeSalaryData4[i + 1].split(",")[0]
  ) {
    console.log(employeeSalaryData4[i].split(",")[0]);
    console.log(` - ${employeeSalaryData4[i].split(",")[1]}`);
  }
}