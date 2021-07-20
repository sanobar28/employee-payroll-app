/**
 * UC17 to view Employee Payroll details from Local Storage.
 */ 
   
//the innerHTML is populated by attaching a Listener to DOMContentLoaded event.

let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
      return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

/** 
 * UC15 to view Employee Payroll details in a Tabular
 * Format from JS File using Template Literals.
 * 
 *  Template literals are enclosed by the backtick (` `) character
 *  instead of double or single quotes.
 *  Template literals can contain placeholders. These are
 *  indicated by the dollar sign and curly braces  
 */ 
function createInnerHtml() {
    const headerHtml = `<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>
           <th>Salary</th><th>start Date</th><th>Actions</th></tr>`

       if(empPayrollList.length == 0) return;   
       let innerHtml = `${headerHtml}`
       for (const empPayrollData of empPayrollList) {
           innerHtml = `${innerHtml}
           <tr>
           <td><img src="${empPayrollData._profilePic}" class="profile" width="30px" alt=""></td>
           <td>${empPayrollData._name}</td>
           <td>${empPayrollData._gender}</td>
           <td>${getDeptHtml(empPayrollData._department)}</td>
           <td>${empPayrollData._salary}</td>
           <td>${getDate(empPayrollData._startDate)}</td>
           <td>
               <img id="1" name="${empPayrollData._id}" onclick="remove(this)" alt="delete" width="30px" src="../assets/icons/delete-black-18dp.svg">
               <img id="1" name="${empPayrollData._id}" onclick="update(this)" alt="edit" width="30px" src="../assets/icons/create-black-18dp.svg  ">
           </td>
       </tr>`
       }
       document.querySelector('#display').innerHTML = innerHtml
}


/**
 * Get date helper function
 * @param {*} date 
 * @returns 
 */
const getDate = (date) => {
    let temp = date;
    const d = new Date(temp);
    const months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    return  d.getDay() + " - " + months[d.getMonth()] + " - " + d.getFullYear();
}


//Display Employee Details from JSON Object including the Department
function getDeptHtml(deptList) {
    let deptHtml = ''
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml
}



/**
 * UC16 To view Employee Payroll details in a Tabular Format from JSON Object.
 */

/* const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Mohan Roy',
            _gender: 'male',
            _department: [
                'Engineering', 'Hr'
            ],
            _salary: '400000',
            _startDate: '21 May 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../Assets/profile-images/Ellipse -2.png'
        },
        {
            _profilePic: '../assets/profile-images/Ellipse -1.png',
            _name: 'Sanobar Mujawar',
            _gender: 'female',
            _department: [
                'Hr', 'Sale'
            ],
            _salary: '200000',
            _startDate: '20 Feb 2020',
            _note: '',
            _id: new Date().getTime(),

        }
    ]
    return empPayrollListLocal
} 
*/