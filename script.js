let form = document.getElementById('my-form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const formData = {
        name: name,
        email: email
    };
    saveFormData(formData);
});

function saveFormData(formData){
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];

    storedData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedData));
    
}

