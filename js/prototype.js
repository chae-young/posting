    /* 프로토타입 1 - 예제1 */

    // function Person(){
    //     this.name = 'rim';
    //     this.job = 'siger'
    // }

    // var obj1 = new Person();
    // obj1.age = 12;
    // var obj2 = new Person();

    // console.log(obj1.age); //12
    // console.log(obj2.age); //undefined


    /* 프로토타입 1 - 예제2 */
    function Person(){
        this.name = 'rim';
        this.job = 'siger'
    }

    Person.prototype.age = 12;

    var obj1 = new Person();
    var obj2 = new Person();

    console.log(obj1.age)
    console.log(obj2.age)

    
    console.log(typeof Person.prototype) // object
    console.log(typeof obj1.prototype) // undefined
    console.log(typeof obj1.__proto__) //object
    console.log(Person.prototype ===  obj1.__proto__) // true

    var proto1 = Object.getPrototypeOf(obj1);
    
    console.log(proto1.age)