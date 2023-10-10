let form = document.getElementById('my-form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    const formData = {
        name: name,
        email: email,
        number: number
    };
    saveFormData(formData);
});

const storedData = JSON.parse(localStorage.getItem('formData')) || [];
function saveFormData(formData){

    storedData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedData));
}

let list = document.getElementById('users');
storedData.forEach(element => {
    let listitem = document.createElement('li');
    listitem.textContent = element.name + '-' + element.email + '-' + element.number;
    list.appendChild(listitem);
});



