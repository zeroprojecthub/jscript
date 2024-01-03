function setUserName(username) {
    this.username=username;
}


function createUser(username,pasword,email){
    setUserName.call(this,username);
    this.pasword=pasword;
    this.email=email
}

let ob = new createUser("karan",123,"karan@fb");
console.log(ob);