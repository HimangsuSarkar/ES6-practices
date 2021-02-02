class Student {
    constructor(sID, sName) {
        this.id = sID;
        this.name = sName;
        this.village = "nimtoli";
    }
}

const student1 = new Student(11, "omok uddin");
const student2 = new Student(12, "tomok mia");

console.log(student1, student2);
