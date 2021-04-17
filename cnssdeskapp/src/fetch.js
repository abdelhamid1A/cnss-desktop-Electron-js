
function login() {
let email = document.getElementById('Email').value;
let password = document.getElementById('password').value;
console.log(password)

   if (document.getElementById("Employee").checked)
   { 
          let user = {
              email: email,
              password: password
          }
         axios.post('http://localhost:4000/employee/login', user)
    .then(function (response) {
        if (response.data.message === "redirect to reset password")
        {
            localStorage.setItem('restingtoken', response.data.token);
            window.location.replace("./restpassword/resetpass.html");
        }
        else{localStorage.setItem('token',response.data );
        window.location.replace("./profile/profile.html");} 
        
    }).catch(function (error) {
        // handle error
        console.log(error);
    })

}
    else if (document.getElementById("Agent").checked)
    {   
                  let user = {
                      user_name: email,
                      password: password
                  }
         axios.post('http://localhost:4000/login', user)
             .then(function (response) {
                 localStorage.setItem('agenttoken', response.data);
                 window.location.replace("./register/register.html");
             }).catch(function (error) {
                  // handle error
                  console.log(error);
              })
              
    }

   
    
}
function user() {
    if (document.getElementById("Agent").checked)
    {
        document.getElementById("user").innerHTML = "username";
        document.getElementById("Email").type = "text"
        console.log("hello");
      
    } else if (document.getElementById("Employee").checked)
        {
            document.getElementById("user").innerHTML = "Email adress";
            document.getElementById("Email").type = "Email"
            console.log("hello");

        }
    
}
function SignUpAgent() {
    let usernam = document.getElementById('usernameAgent').value;
    let password = document.getElementById('passwordAgent').value;
let agent = {
    user_name : usernam,
     password : password
}
    axios.post('http://localhost:4000/', agent)
                 .then(function (response) {
                     window.location.replace("./index.html");
                 }).catch(function (error) {
                     // handle error
                     console.log(error);
                 })
    
}