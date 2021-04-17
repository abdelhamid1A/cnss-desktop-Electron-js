function getinfo () {
     let token = window.localStorage.getItem('token');
    axios.get('http://localhost:4000/employee/info', {headers : {
        "auth-token": token
    } })
        .then(function (response) {
            console.log(response);     
         document.getElementById("userId").innerHTML = response.data.id;
         document.getElementById("headerName").innerHTML = response.data.user_name;
         document.getElementById("phone").innerHTML = response.data.phone;
         document.getElementById("email").innerHTML = response.data.email;
         document.getElementById("matricule").innerHTML = response.data.matricule;
         document.getElementById("creationDate").innerHTML = response.data.createdAt;
         document.getElementById("name").innerHTML = response.data.user_name;

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

function logOut() {
    window.localStorage.removeItem('token');
    window.location.replace("../index.html");
}
