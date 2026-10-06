import { createRoot } from "react-dom/client";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Students } from "./Student";
import { StudentReview } from "./StudentReview";

const headerPageStyle = {
  textAlign: "center",
  backgroundColor: "lightgray",
  padding: "10px",
};

const courseName = "React Js";
const lectureCount = 11;
const isActive = false;

function HomePage() {
  return (
    <div>
      <p>We are super excited to learn React</p>
      <h3> Topics to Learn in {courseName} Course:-</h3>
      <p> Lecture Count :- {lectureCount}</p>
      <p>Is Active :- {isActive.toString()}</p>
      <p>IsActive :- {isActive ? "Active" : "InActive"}</p>
      <ul>
        <li>Jsx</li>
        <li>Component</li>
        <li>Routing</li>
        <li>State Management</li>
      </ul>
      <div>
        Enter Task :{" "}
        <input type="text" disabled={isActive} maxLength={6}></input>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <div>
    <Header></Header>
    <HomePage></HomePage>
    <hr />
    <h5 className="pt-2">Students Enrolled :-</h5>
    <Students experience={2} name="Praveen Fuloria">
      <StudentReview></StudentReview>
    </Students>
    <Students experience={5} name="Krisha Fuloria"></Students>
    <Footer></Footer>
  </div>,
);
