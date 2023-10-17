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

    axios.post("https://crudcrud.com/api/cc870a2286724de3a782d6b4fe6bf98d/unicorns", formData)
    .then((res) => {
        const data = res.data;
        displayStoredData(data);
        // console.log(data)
    })
    .catch((err) => {
        console.log(err)
    }) 

    

    

    // saveFormData(formData);
    // location.reload();

     
});

//Saving in local storage
const storedData = JSON.parse(localStorage.getItem('formData')) || [];
// function saveFormData(formData){

//     storedData.push(formData);

//     // localStorage.setItem('formData', JSON.stringify(storedData));
    
// }

let list = document.getElementById('users');
function displayStoredData(element) {
    list.innerHTML = '';

    // storedData.forEach((element, index) => {

        //Showing data on UI
        let listitem = document.createElement('li');
        listitem.textContent = element.name + '-' + element.email + '-' + element.number;
        
        // Delete Functionality
        let delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.type = 'button';
        delBtn.addEventListener('click', function() {
            storedData.splice(index, 1);
            localStorage.setItem('formData', JSON.stringify(storedData));

            displayStoredData();
        });

        // Edit functionality
        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.type = 'button';
        editBtn.addEventListener('click', function(){

            let nameInput = document.getElementById('name');
            nameInput.value = element.name;
            let emailInput = document.getElementById('email');
            emailInput.value = element.email;
            let numberInput = document.getElementById('number');
            numberInput.value = element.number;

            storedData.splice(index, 1);
            localStorage.setItem('formData', JSON.stringify(storedData));

            displayStoredData();
        })

        // Appending delete and edit to li and li to ul
        listitem.appendChild(delBtn);
        listitem.appendChild(editBtn);
        list.appendChild(listitem);
    // });
}

//Displaying data to UI
displayStoredData();
