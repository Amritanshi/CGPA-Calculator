
// Select elements
const form = document.getElementById('cgpa-form');
const courseInputsContainer = document.querySelector('.course-inputs');
const cgpaResultContainer = document.getElementById('cgpa-result');

const courseData = {
  'Life Skills 1': { credits: 0 , gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
  'Semic data analytics': { credits: 9, gradeWeights: {S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0}  },
  'Ecology and environment ': { credits: 0, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0}  },
  'Functions of several variables ': { credits: 3, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
  'Engineering Drawing': { credits: 7, gradeWeights: {S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0}  },
  'Introduction to Civil Engineering Profession': { credits: 8, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0}  },
  'Physics I': { credits: 10, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
  'Engineering Mechanics': { credits: 10, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0}  },
'Introduction to Civil Engineering Profession': { credits: 8, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Civil Engineering Materials and Construction': { credits: 9, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Introduction to Programming': { credits: 12, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Chemistry I: Structure, Bonding & Reactivity': { credits: 10, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Chemistry I: Structure, Bonding & Reactivity': { credits: 0, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Chemistry Lab I': { credits: 3, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Physics Laboratory I': { credits: 4, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Series and Matrices': { credits: 10, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Hydraulic Engineering': { credits: 11, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Surveying': { credits: 10, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Mechanics of materials': { credits: 11, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Highway Engineering': { credits: 9, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Probability, Statistics and Stochastic Process': { credits: 9, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Geotechnical Engineering I': { credits: 11, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Traffic Engineering': { credits: 9, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Environmental Engineering': { credits: 10, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Structural Analysis': { credits: 11, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Traffic Engineering': { credits: 9, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Structural Analysis': { credits: 11, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Introduction to Chinese Language': { credits: 9, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Basic design of reinforced concrete structures': { credits:11 , gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Differential Equations': { credits: 9, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Hydraulic and Environmental Engineering Lab': { credits: 4, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Urbanization and Development': { credits: 10, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Life Sciences': { credits: 9, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Water Resources Engineering"': { credits: 12, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Geotechnical Engineering II': { credits: 11, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Construction Materials Laboratory': { credits: 4, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Construction Project Management': { credits: 10, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Basic Steel Design': { credits: 11, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Structural engineering laboratory': { credits: 4, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Principles of Economics': { credits: 9, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Machine Learning in Civil Engineering': { credits: 9, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Design of Concrete Structrual Systems': { credits: 9, gradeWeights: { S : 9, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },
'Seismic Data Analytics': { credits: 10, gradeWeights: { S : 10, A : 9, B : 8, C: 7,D:6,E:4,F :0 ,U:0,P:0} },


};

// Add event listener to the form for initial input generation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const totalCourses = parseInt(document.getElementById('total-courses').value);
  generateCourseInputs(totalCourses);
});

// Function to generate course inputs dynamically
function generateCourseInputs(totalCourses) {
  courseInputsContainer.innerHTML = '';
  for (let i = 0; i < totalCourses; i++) {
    const courseInput = document.createElement('div');
    courseInput.className = 'course-input';
    courseInput.innerHTML = `
      <label for="course-${i}">Course ${i + 1}:</label>
      <select id="course-${i}" onchange="calculateCGPA()"> <!-- Added onchange event -->
        <option value="">Select course</option>
        ${Object.keys(courseData).map((courseCode) => `<option value="${courseCode}">${courseCode}</option>`).join('')}
      </select>
      <label for="grade-${i}">Grade:</label>
      <select id="grade-${i}" onchange="calculateCGPA()"> <!-- Added onchange event -->
        <option value="">Select grade</option>
        <option value="S">S</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="U">U</option>
        <option value="P">P</option>
      </select>
    `;
    courseInputsContainer.appendChild(courseInput);
  }
  calculateCGPA(); // Initial calculation after generating inputs
}

// Function to calculate CGPA
function calculateCGPA() {
  const courseInputs = document.querySelectorAll('.course-input');
  let totalWeightedCredits = 0;
  let totalCredits = 0;
  let validCoursesCount = 0; // Track how many valid courses are selected

  courseInputs.forEach((courseInput) => {
    const courseCode = courseInput.querySelector('select[id^="course-"]').value;
    const grade = courseInput.querySelector('select[id^="grade-"]').value;

    if (courseCode && grade && courseData[courseCode]) {
      const credits = courseData[courseCode].credits;
      const gradeWeight = courseData[courseCode].gradeWeights[grade];
      totalWeightedCredits += credits * gradeWeight;
      totalCredits += credits;
      validCoursesCount++;
    }
  });

  // Check if at least one valid course was selected
  if (validCoursesCount > 0) {
    const cgpa = totalWeightedCredits / totalCredits;
    cgpaResultContainer.innerHTML = `CGPA: ${cgpa.toFixed(2)}`;
  } else {
    cgpaResultContainer.innerHTML = "CGPA: N/A"; // Display N/A if no valid courses are selected
  }
}
