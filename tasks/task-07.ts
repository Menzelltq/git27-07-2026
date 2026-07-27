/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */
const registrationInfo = {
    registration: (studentID: string, fullName: string, gradeLevel: string, courseID: string, courseTitle: string, instructorName: string, totalLearningHours: number, registrationDate: string, isPaymentCompleted: boolean) => ({
        studentID, fullName, gradeLevel, courseID, courseTitle, instructorName, totalLearningHours, registrationDate, isPaymentCompleted
    })
};

const registrationData = [
    registrationInfo.registration("STU001", "Mas Andre", "10th Grade", "CS101", "Introduction to Programming", "Mr. Smith", 40, "2024-06-01", true),
    registrationInfo.registration("STU002", "Mas Asril", "11th Grade", "CS102", "Data Structures and Algorithms", "Ms. Johnson", 60, "2024-06-02", false),
    registrationInfo.registration("STU003", "Mas Budi", "12th Grade", "CS103", "Web Development Fundamentals", "Mr. Brown", 50, "2024-06-03", true)
];

console.log(registrationData);