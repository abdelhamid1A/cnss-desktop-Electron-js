function getinfo() {
     axios.get('http://localhost:4000/employee/')
         .then(function (response) {
          console.log(response.data);
          let data = "";
          console.log(response.data[0].user_name)
          //data += response.data[0].user_name;
              for (let i = 0; i < response.data.length; i++) {
               console.log(response.data[0].user_name)
                 
                 data += " <tr> <td>" + response.data[i].user_name + "</td> <td>" + response.data[i].id + "</td> <td> " + response.data[i].matricule + " </td><td> " + response.data[i].phone + " </td> <td> " + response.data[i].email + " </td> <td> " + response.data[i].createdAt.split("T")[0] + " </td> <td class='text-center'><a onclick='deletee(" +response.data[i].id + ")' class='btn btn-danger btn-xs'> <span class='glyphicon glyphicon-remove'  ></span> Del</a></td> </tr>"
                          
                   
              }
        document.getElementById('tablebody').innerHTML = data
         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })

}
function logOut() {
    window.localStorage.removeItem('agenttoken');
    window.location.replace("../index.html");
}
function deletee(id) {
         axios.delete('http://localhost:4000/employee/' + id)
             .then(function (response) {
                getinfo()
             })
             .catch(function (error) {
                 // handle error
                 console.log(error);
             })
}