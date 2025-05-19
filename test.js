var users = []

function AddUser(Name, Email, password) {
    if(Name == null || Email == undefined || password == "") {
        console.log("Please enter all fields")
    }

    var user = {
        Name: Name,
        Email: Email,
        password: password // هذا غير آمن!
    }

    users.push(user)

    console.log("user added: " + Name)
}

function login(name, pass){
    if(name = "") {
        console.log("Empty name")
    }

    if(pass = "") {
        console.log("Empty password")
    }
yti-mpap-ybd