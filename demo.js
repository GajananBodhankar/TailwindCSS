class A {
  constructor(a, b) {
    this.name = a;
    this.age = b;
  }
}
class B extends A {
  constructor(a, b, c) {
    super(a, b);
    this.address = c;
  }
  disp() {
    console.log(this.name, this.age, this.address);
  }
}

let i = new B("gajanan", 22, "hyderabed");
i.disp();
