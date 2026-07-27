/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */
const employeeAttendance = {
    attendance: (employeeID: string, employeeName: string, date: string, checkInTime: string, checkOutTime: string, totalWorkingHours: number, isPresent: boolean) => ({
        employeeID, employeeName, date, checkInTime, checkOutTime, totalWorkingHours, isPresent
    })
};

const attendanceData = [
    employeeAttendance.attendance("EMP001", "Mas Andre", "2024-06-01", "09:00", "17:00", 8, true),
    employeeAttendance.attendance("EMP002", "Mas Asril", "2024-06-01", "09:30", "18:00", 8.5, true),
    employeeAttendance.attendance("EMP003", "Mas Budi", "2024-06-01", "10:00", "16:00", 6, true)
];
