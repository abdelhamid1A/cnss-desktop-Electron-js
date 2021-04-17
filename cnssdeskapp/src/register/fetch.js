function register() {
    let token = window.localStorage.getItem('agenttoken');
    let  employee = {
      user_name: document.getElementById('userName').value,
      email: document.getElementById('email').value,
      matricule: document.getElementById('matricule').value,
      phone: document.getElementById('phone').value
   }
console.log(employee);
    axios.post('http://localhost:4000/employee/', employee, {
            headers: {
                "auth-token": token
            },
        }
        )
        .then(function () {
            window.location.replace('../showemplees/showall.html')
        })
        .catch(function (error) {
            console.log(error);
        });
}

function logOut() {
    window.localStorage.removeItem('token');
    window.location.replace("../index.html");
}