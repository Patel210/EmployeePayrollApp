window.addEventListener('DOMContentLoaded', (event) => {

  const name = document.querySelector('#name');
  const textError = document.querySelector('.text-error');
  name.addEventListener('input', function() {
    if (name.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      (new EmployeePayroll()).name = name.value;
      textError.textContent = "";
    } catch (error) {
      textError.textContent = error;
    }
  });

  const salary = document.querySelector('#salary');
  const output = document.querySelector('.salary-output');
  output.textContent = salary.value;
  salary.addEventListener('input', function () { output.textContent = salary.value; });
});

const save = (event) => {
  try {
    let employeePayrollData = createEmployeePayroll();
    alert(employeePayrollData);
  } catch (error) {
    alert(error);
  }
}

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayroll();
  try {
    employeePayrollData.name = getInputValueById('#name');
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    employeePayrollData.startDate = new Date(getInputValueById('#year'), getInputValueById('#month'),
      getInputValueById('#day'));
    return employeePayrollData;
  } catch (error) {
    alert(error);
    throw "Unable To Populate Employee Payroll Object!"
  }
}

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach(item => {
    if (item.checked) {
      selItems.push(item.value);
    }
  });
  return selItems;
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}