let img = document.querySelector("#img");
let studentName = document.querySelector("#name");
const storedStudentInfo = localStorage.getItem("studentInfo");
const studentInfo = JSON.parse(storedStudentInfo);
const studentId = document.querySelector("#studentId");
const isPaid = document.querySelector("#isPaid");
const batch = document.querySelector("#batch");
img.src = studentInfo.img;
studentName.innerHTML = `Name : ${studentInfo.name}`;
studentId.innerHTML = `Student ID : ${studentInfo.studentId}`;
isPaid.innerHTML = `premium user : ${studentInfo.isPaid}`;
batch.innerHTML = `batch : ${studentInfo.batch}`;
