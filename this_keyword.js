//The This Keyword
//This in below is bound in the person object
const person = {
    firstName: "Daniel",
    sayName: function(){
        return this.firstName;
    }
}

console.log(person.sayName());

//This keyword is lexically scoped.
//Meaning that the scope of the function will be bound based on
//where it was defined.
//Refers to the parent scope


const people = {
    firstName: "Daniel",
    hobbies: ['Robots', 'Games','Internet', "JavaScript"],
    showHobbies: function(){
        this.hobbies.forEach(hobby => {
            console.log(`${this.firstName} like ${hobby}`);
        });
    }  
};

console.log(people.showHobbies());

//THis will return undefined

const person_people = {
    firstName: "Daniel",
    sayName:  () => {
        return this.firstName;
    }
};

console.log(person_people.sayName());


