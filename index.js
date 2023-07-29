// Write your solution in this file!
const employee = {
    name: 'Quincy',
    streetAddress: 2077-200,
}; // Defined a variable `employee` and assigned it to an object.

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updated = { ...employee };
    updated[key] = value;
    return updated;
}
// const newObj = updateEmployeeWithKeyAndValue(
//     employee,
//     'name',
//     'Quincy'
//  );
// console.log(newObj.name);
// console.log(employee.name);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
// const newObj = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Caren');
// console.log(newObj);

function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee};
    delete newObj[key];
    return newObj;
}
const updated = deleteFromEmployeeByKey(employee, 'name');
console.log(updated);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
const newObj = destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(newObj);