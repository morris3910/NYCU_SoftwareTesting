const test = require('node:test');
const assert = require('assert');
const { MyClass, Student } = require('./main');

test("Test MyClass's addStudent", () => {
    // TODO
    const myClass = new MyClass();
    const student = new Student();
    student.setName("Bob");
    assert.strictEqual(myClass.addStudent(student), 0);
    assert.strictEqual(myClass.addStudent("Alice"), -1);
    //throw new Error("Test not implemented");
});

test("Test MyClass's getStudentById", () => {
    // TODO
    const myClass = new MyClass();
    const student = new Student();
    student.setName("Bob");
    myClass.addStudent(student);
    assert.strictEqual(myClass.getStudentById(0).getName(), "Bob");
    assert.strictEqual(myClass.getStudentById(-1), null);
    assert.strictEqual(myClass.getStudentById(9), null);
    //throw new Error("Test not implemented");
});

test("Test Student's setName", () => {
    // TODO
    const student1 = new Student();
    const student2 = new Student();
    student1.setName("Bob");
    student2.setName(123);
    assert.strictEqual(student1.getName(), "Bob");
    assert.strictEqual(student2.getName(), '');
    //throw new Error("Test not implemented");
});

test("Test Student's getName", () => {
    // TODO
    const student = new Student();
    assert.strictEqual(student.getName(), '');
    student.setName("Bob");
    assert.strictEqual(student.getName(), "Bob");
    //throw new Error("Test not implemented");
});
