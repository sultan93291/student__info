let btn = document.querySelector("#btn");
let input = document.querySelector("#student");

const Students = [
  {
    name: "pronob biswas",
    studentId: 454464,
    isPaid: false,
    img: "../images/pronob.jpg",
    batch: "mern2306",
  },

  {
    name: "Asmaul Hasan Tushar ",
    studentId: 454463,
    isPaid: false,
    img: "../images/asmaul.jpg",
    batch: "mern2306",
  },
  {
    name: "al nahian rafi",
    studentId: 454462,
    isPaid: false,
    img: "../images/rafi.jpg",
    batch: "mern2306",
  },
  {
    name: "samiha tahsin",
    studentId: 454461,
    isPaid: false,
    img: "../images/female.png",
    batch: "mern2306",
  },
  {
    name: " alamin patowary ",
    studentId: 454460,
    isPaid: false,
    img: "../images/alamin.jpg",
    batch: "mern2306",
  },
  {
    name: " fahim abdullah ",
    studentId: 454459,
    isPaid: false,
    img: "../images/fahim.jpg",
    batch: "mern2306",
  },
  {
    name: " shahriar ahmed bijoy ",
    studentId: 454458,
    isPaid: false,
    img: "../images/bijoy.jpg",
    batch: "mern2306",
  },
  {
    name: " topu mahfujul ",
    studentId: 454457,
    isPaid: false,
    img: "../images/topu.jpg",
    batch: "mern2306",
  },
  {
    name: " muhammad anik khan ",
    studentId: 454456,
    isPaid: false,
    img: "../images/anik.jpg",
    batch: "mern2306",
  },
  {
    name: "md tawhidul islam ",
    studentId: 454455,
    isPaid: false,
    img: "../images/tawhidul.jpg",
    batch: "mern2306",
  },
  {
    name: "arop dhar ",
    studentId: 454454,
    isPaid: false,
    img: "../images/arop.jpg",
    batch: "mern2306",
  },
  {
    name: " muhammad tamim hasan ",
    studentId: 454453,
    isPaid: false,
    img: "../images/tamim.jpg",
    batch: "mern2306",
  },
  {
    name: "muzahidul islam anik",
    studentId: 454452,
    isPaid: false,
    img: "../images/muzahid.jpg",
    batch: "mern2306",
  },
  {
    name: " tafsan hossain shawon ",
    studentId: 454451,
    isPaid: false,
    img: "../images/shawon.jpg",
    batch: "mern2306",
  },
  {
    name: "arpita nath",
    studentId: 454450,
    isPaid: false,
    img: "../images/female.png",
    batch: "mern2306",
  },
  {
    name: " mohammad riyad ",
    studentId: 454449,
    isPaid: false,
    img: "../images/riyad.jpg",
    batch: "mern2306",
  },
  {
    name: " md . imran khan ",
    studentId: 454448,
    isPaid: false,
    img: "../images/imran.jpg",
    batch: "mern2306",
  },
  {
    name: " md sazzd hossain ",
    studentId: 454447,
    isPaid: false,
    img: "../images/sazzad.jpg",
    batch: "mern2306",
  },
  {
    name: "nayeem islam",
    studentId: 454446,
    isPaid: false,
    img: "../images/nayeem.jpg",
    batch: "mern2306",
  },
  {
    name: "fajle rayhan rabby ",
    studentId: 454445,
    isPaid: false,
    img: "../images/rayhan.jpg",
    batch: "mern2306",
  },
  {
    name: "md. abib ahmed dipto",
    studentId: 454444,
    isPaid: false,
    img: "../images/sultan.jpg",
    batch: "mern2306",
  },
  {
    name: "md tasin ahmed",
    studentId: 454443,
    isPaid: false,
    img: "../images/tasin.jpg",
    batch: "mern2306",
  },
];

function findStudentById(studentid) {
  return Students.find(student => {
    return student.studentId === studentid;
  });
}

btn.addEventListener("click", () => {
  if (input?.value !== "") {
    if (parseInt(input.value) - 20) {
      if (input.value.length != 6) {
        alert(`Student Id Can't Be More Or Less Than 6 Characters`);
      } else {
        const newStudent = findStudentById(parseInt(input?.value));
        if (newStudent) {
          let studentInfo = {
            name: newStudent.name,
            img: newStudent.img,
            studentId: newStudent.studentId,
            isPaid: newStudent.isPaid,
            batch: newStudent.batch,
          };
          localStorage.setItem("studentInfo", JSON.stringify(studentInfo));
          window.location.href = "../student/student.html";
        } else {
          alert("Invalid Id ");
        }
      }
    } else {
      alert("Please Enter Number Only");
    }
  } else {
    alert("Please Enter Your Student Id ");
  }
});
