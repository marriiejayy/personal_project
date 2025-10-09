let students =  [];

let names = document.getElementById('name').value;
let age = document.getElementById('age').value;
let classes = document.getElementById('class').value;
let image = document.getElementById('url').value;
let scoreOne = document.getElementById('physics').value;
let scoreTwo = document.getElementById('chemistry').value;
let scoreThree = document.getElementById('biology').value;

function addStudent() {
    if (names === "" || age === "" || classes === "" || image === "" || scoreOne === "" || scoreTwo === "" || scoreThree === "") {
        showMessage('Please fill in all fields!', 'error');
        return;
    }
    //
    const scoreOne = Number(scoreOne);
    const scoreTwo = Number(scoreTwo);
    const scoreThree = Number(scoreThree);

    let average = (scoreOne + scoreTwo + scoreThree) / 3;
    average = average.toFixed(2);

    const student = {
        id: Date.now(),
        name: names,
        age: age,
        class: classes,
        image: image,
        average: average
    };

    students.push(student);
    
    displayStudents();

    clearForm();

    showMessage('Student added successfully', 'success');
}

function displayStudents() {
    const tableBody = document.getElementById('studentTable');
    const noStudentMsg = document.getElementById('noStudents');

    tableBody.innerHTML ='';

    if(students.length === 0) {
        noStudentMsg.style.display = 'block'
    } else {
        noStudentMsg.style.display = 'none'
    }
    for(let i=0; i < students.length; i++) {
        const student = students[1];

        const performance = 
    }
}