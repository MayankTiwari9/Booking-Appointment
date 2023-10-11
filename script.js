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
    location.reload();
});

const storedData = JSON.parse(localStorage.getItem('formData')) || [];
function saveFormData(formData){

    storedData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedData));
}

let list = document.getElementById('users');
function displayStoredData() {
    list.innerHTML = '';

    storedData.forEach((element, index) => {
        let listitem = document.createElement('li');
        listitem.textContent = element.name + '-' + element.email + '-' + element.number;
        
        let delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.type = 'button';
        delBtn.addEventListener('click', function() {
            storedData.splice(index, 1);
            localStorage.setItem('formData', JSON.stringify(storedData));

            displayStoredData();
        });

        listitem.appendChild(delBtn);
        list.appendChild(listitem);
    });
}

displayStoredData();
