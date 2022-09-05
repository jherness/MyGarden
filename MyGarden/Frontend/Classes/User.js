export class User {
    constructor(fName = "Anita", lName = "Olman", eMail = "", pass = "") {
        this.eMail = eMail
        this.fName = fName
        this.lName = lName
        this.pass = pass
    }

    setFName(fName){
        this.fName = fName
    }
    getFullName(){
        return this.fName + " " + this.lName
    }
  }
