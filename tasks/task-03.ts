/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

const murid = {
    student: (studentID: string, fullName: string, age: number, isActive: boolean) => ({
        studentID, fullName, age, isActive
    })
};
const dataMurid = [
    murid.student("001", "Nadia Putri", 17, true),
    murid.student("002", "Rizky Pratama", 18, true),
    murid.student("003", "Aulia Rahman", 17, true)
];

console.log("=== Student Data ===");
console.log(dataMurid);
