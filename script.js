document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("my-form");
    const list = document.getElementById("users");
    let storedData = [];
  
    function displayStoredData(data) {
      list.innerHTML = "";
      data.forEach((element, index) => {
        let listitem = document.createElement("li");
        listitem.textContent = `${element.name} - ${element.email} - ${element.number}`;
  
        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.type = "button";
        delBtn.addEventListener("click", () => deleteUserData(element.id, index));
  
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.type = "button";
        editBtn.addEventListener("click", () => {
          document.getElementById("name").value = element.name;
          document.getElementById("email").value = element.email;
          document.getElementById("number").value = element.number;
          storedData.splice(index, 1);
          updateUserData(element);
          displayStoredData(storedData);
        });
  
        listitem.appendChild(delBtn);
        listitem.appendChild(editBtn);
        list.appendChild(listitem);
      });
    }
  
    function updateUserData(user) {
      axios.put(`https://crudcrud.com/api/ddcfc201340b49b3948b1f6c2dc01d5e/unicorns/${user.id}`, user)
        .then(() => displayStoredData(storedData))
        .catch(err => console.log(err));
    }
  
    function deleteUserData(id, index) {
      axios.post(`http://localhost:4000/admin/delete-user`, {id})
        .then(() => {
            storedData.splice(index, 1);
          displayStoredData(storedData);
        })
        .catch(err => console.log(err));
    }

    console.log(storedData);
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const number = document.getElementById("number").value;
      const formData = { name, email, number };
      axios.post("http://localhost:4000/admin/add-user", formData)
        .then(res => {
          storedData.push(res.data.user);
          displayStoredData(storedData);
        })
        .catch(err => console.log(err));
    });
  
    function fetchUsers() {
      axios.get("http://localhost:4000/admin/users")
        .then(res => {
          storedData = res.data;
          displayStoredData(storedData);
        })
        .catch(err => console.log(err));
    }
  
    fetchUsers(); // Fetch users when the page loads
  });
  