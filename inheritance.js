class Parent {
    constructor(name) {
        this.FatherName = "khukha khukhu r baba"
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.FatherName;
    }
}

const baby = new Child("khukha moni");
const baby2 = new Child("khukhu moni");
console.log(baby.getFullName());
console.log(baby2);
