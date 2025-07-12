
const employees = [
    {
        id: 1,
        name: "Muhammad Usman",
        age: 22,
        department: "Software Developer",
        salary: 200000,
    },
    {
        id: 2,
        name: "Dove",
        age: 22,
        department: "Software Developer",
        salary: 220000,
    },
    {
        id: 3,
        name: "Huzaifa",
        age: 19,
        department: "HR",
        salary: 100000,
    },
    {
        id: 4,
        name: "Peter",
        age: 20,
        department: "HR",
        salary: 120000,
    }
]

const totalEmployees = employees.map((employee) => {
    `<p>${employee.id}`
    document.getElementById("employeesDetails").innerHTML
})

