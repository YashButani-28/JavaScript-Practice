class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

    fullname(){
      return this.firstname+" "+this.lastname;
    }

}

class Employee extends Person{
constructor(firstname,lastname,age,Emp_id,email_id){
    super(firstname,lastname,age)
    this.Emp_id=Emp_id;
    this.email_id=email_id;
}

}

// const emp=new Employee("yash","Butani",21,8,"y@gamil.com");


class Sports extends Employee{
    constructor(firstname,lastname,age,Emp_id,email_id,sport_name,player){
        super(firstname,lastname,age,Emp_id,email_id)
        this.sport_name=sport_name;
        this.player=player;
    }

}

const sport=new Sports("yash","Butani",21,8,"y@gamil.com","Football","Cristiano Ronaldo");

console.log(`Name: ${sport.fullname()}`);
console.log(`Age: ${sport.age}`);
console.log(`Employee Id: ${sport.Emp_id}`);
console.log(`Email ID: ${sport.email_id}`);
console.log(`Most watch Sport: ${sport.sport_name}`);
console.log(`Fan of Player: ${sport.player}`);


function factorial(n){
if(n<=0){
    return 1;
}else{
          return n*factorial(n-1)
    }
}

console.log(factorial(5));




function fibonacci(n){
    if (n == 0|| n == 1){
        return n
    }else{

        return fibonacci(n - 1) + fibonacci(n - 2)
    }
    
}

console.log(fibonacci(5));
