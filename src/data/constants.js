import IITImg from "../../images/iitrprlogo.png";
import SchoolImg from "../../images/schoollogo.jpeg";
import FFImg from "../../images/internFFlogo.png";
import TBImg from "../../images/TravelBuddyImage.jpeg";

export const Bio = {
  name: "Aviral Gupta",
  roles: [
    "Coding enthusiast",
    "Passionate Developer",
    "Finance enthusiast",
    "Current Affairs aficionado",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Anybody01",
  resume:
    "https://drive.google.com/file/d/1tpSr2Q7oO6gaw-CX2Po3uszCYhzij8ca/view?usp=drivesdk",
  linkedin: "https://www.linkedin.com/in/aviral-gupta-28448a202",
  insta: "https://www.instagram.com/aviral_gupta03/",
};

export const experiences = [
  {
    id: 0,
    img: FFImg,
    role: "Quant Analyst Intern",
    company: "Futures First",
    date: "May 2023 - July 2023",
    desc: "Acquired a fundamental understanding of economic concepts such as GDP, currency, inflation, economic cycle, central banks, monetary policy, fiscal policy and yield curve. Learned to analyze and interpret various economic indicators, indices, and reports released regularly by institutions that significantly impact financial markets. Conducted analysis of historical data assessing how different central banks responded to diverse economic data points over the past 30 years.",
    //doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: IITImg,
    school: "Indian Institute of Technology, Ropar",
    date: "Oct 2020 - May 2024",
    grade: "8.46 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Metallurgical and Materials Engineering with minor in Computer Science and Engineering at IIT Ropar. I have completed 7 semesters and have a CGPA of 8.46. I have taken courses in Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering, among others.",
    degree: "Bachelor of Technology - BTech",
  },
  {
    id: 1,
    img: SchoolImg,
    school: "Sanjay Gandhi Memorial Public School, Ladwa",
    date: "Apr 2019 - March 2020",
    grade: "94%",
    desc: "I completed my class 12th high school education at Sanjay Gandhi Memorial Public School, Ladwa, where I studied Science.",
    degree: "CBSE(XII), Science",
  },
  {
    id: 2,
    img: SchoolImg,
    school: "Sanjay Gandhi Memorial Public School, Ladwa",
    date: "Apr 2017 - March 2018",
    grade: "95.8%",
    desc: "I completed my class 10th education at Sanjay Gandhi Memorial Public School, Ladwa. ",
    degree: "CBSE(X), Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "TravelBuddy",
    date: "Dec 2022 - May 2023",
    description:
      "Developed a carpooling or ride-sharing application for making traveling cheaper and more comfortable for the students of our college while reducing pollution. Used Flutter framework for designing a cross-platform application. Added Firebase as a database for storing information of users, rides and used mobile number with SMS multi-factor authentication.",
    image: TBImg,
    tags: [
      "Flutter",
      "Dart",
      "Firebase",
    ],
    category: "android app",
    github: "https://github.com/Anybody01/TravelBuddy",
    // webapp: "",
  },
  {
    id: 1,
    title: "E-commerce Website",
    date: "Aug 2023 - Aug 2023",
    description:
      "Collaborated with my team to create an e-commerce website using HTML, CSS, and JavaScript with product ranking and system using collaborative filtering and content-based filtering techniques.",
    image:
      "https://private-user-images.githubusercontent.com/108462601/289315662-f9d0dd3d-1e46-4926-b9d8-41e60d874c9d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkwNTEyNzIsIm5iZiI6MTcwOTA1MDk3MiwicGF0aCI6Ii8xMDg0NjI2MDEvMjg5MzE1NjYyLWY5ZDBkZDNkLTFlNDYtNDkyNi1iOWQ4LTQxZTYwZDg3NGM5ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyN1QxNjIyNTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZmU3MTAzYjkxYWFlMTkwYzY4NzM2YjEyNWM3OWJhZGE3MDIwN2I2NTc0OWU0YjAwMGEzMTgyYjAyN2UwNTgzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.WbNIzMhOQbfollliCghxgZLxDnX1dx4mhzg5I9I7wD4",
    tags: ["HTML", "CSS", "React JS",],
    category: "web app",
    github: "https://github.com/Anybody01/GRIDkart",
    // webapp: "",
  },
];

