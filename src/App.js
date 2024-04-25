// import Resume from './Resume.js';
// import './App.css';
import CourseInfo from './CourseInfo';
import CourseInfo1 from './CourseInfo1';
import CourseInfo2 from './DynamicTable';
import CourseInfo3 from './CourseInfo3';
function App(props) {
  const jsonData = [
    { "Sr.No.":1,"enr_no":"30","Co": 1, "Statement": 'Understand Basic of Computer', "K-Levels": "K1,K2" },
    { "Sr.No.":2,"enr_no":"30","Co": 2, "Statement": 'Calssify network types and devices', "K-Levels": "K2" },
    { "Sr.No.":3,"enr_no":"30","Co": 3, "Statement": 'Explain applications of internet', "K-Levels": "K2" },
    { "Sr.No.":4,"enr_no":"30","Co": 4, "Statement": 'Understand of Emerging Technologies', "K-Levels": "K2,K3" },
    { "Sr.No.":5,"enr_no":"30","Co": 5, "Statement": 'Protect own pc from virus', "K-Levels": "K2,K3" },
    { "Sr.No.":5,"enr_no":"30","Co": 5, "Statement": 'Protect own pc from virus', "K-Levels": "K2,K3" },
    { "Sr.No.":5,"enr_no":"30","Co": 5, "Statement": 'Protect own pc from virus', "K-Levels": "K2,K3" },
    { "Sr.No.":5,"enr_no":"30","Co": 5, "Statement": 'Protect own pc from virus', "K-Levels": "K2,K3" },
    { "Sr.No.":5,"enr_no":"30","Co": 5, "Statement": 'Protect own pc from virus', "K-Levels": "K2,K3" },
    { "Sr.No.":5,"enr_no":"30","Co": 5, "Statement": 'Protect own pc from virus', "K-Levels": "K2,K3" },
  ];
  return (
    <div className="App">
     {/* <Resume/> */}
     <CourseInfo/>
     <CourseInfo1/>
     <CourseInfo2 data={jsonData}/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
     <CourseInfo3/>
    </div>
  );
}

// export default App;
// import './App.css';
// import Resume from './Resume';
// import Experience from './experience';
// import Education from './education';
// function App() {
//   return (
//     <>
//     <Resume name="Solanki Krishna" />
//     <h1 style={{"margin":"0px","marginTop":"15px"}}>Experience</h1>
//     <hr style={{"width":"60%","marginBottom":"0px","height":"5px","backgroundColor":"black"}} />
//     <Experience head="Senior Product Manager" con="S-health"/>
//     <Experience head="Product manager" con="McDonald's USA"/>
//     <Experience head="Associate Product Manager" con="Sony Group Corporation"/>
//     <h1 style={{"margin":"0px","marginTop":"15px"}}>Education</h1>
//     <hr style={{"width":"60%","marginBottom":"0px","height":"5px","backgroundColor":"black"}} />
//     <Education head="B.S. Business and Enterpreneurship" con="UC berekeley"/>

//     </>
   
//   );
// }

export default App;
