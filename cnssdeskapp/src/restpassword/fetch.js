function decodefonction() {
    var token = localStorage.getItem('restingtoken')
    let decoded = jwt_decode(token);
    console.log(decoded);
    return decoded.email;
}

function resetPass() {
    let email = decodefonction();
    let password = document.getElementById('password').value
    let newPassword = document.getElementById('newpass').value
    let passwordrest = {
        email: email,
        password: password,
        newPassword: newPassword
    }
    console.log(passwordrest);
        axios.post('http://localhost:4000/employee/resetPassword', passwordrest)
            .then(function () {
                window.location.replace('../index.html')
            })
            .catch(function (error) {
                console.log(error);
            });
}