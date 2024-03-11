//Question 16
let guest: string[] = ["Avery", "Jon", "Jack"]

guest.unshift("Cartor")
guest.splice(1, 0, "Harper")
guest.push("William")

guest.forEach((currentelement) => {
    console.log(`Hey ${currentelement}! Let's hang out soon. How about dinner this Friday? `);
})
//    Question 17 
for (var i = guest.length; guest.length !== 2; i--) {

    console.log(guest.pop());
}
console.log(guest);

//   Question 18

for (var i = guest.length; guest.length !== 2; i--) {
    console.log(`I am sorry ${guest.pop()} i cant invite you to dinner`);
}

for (let item of guest) {
    console.log(`${item} you are still invited`);
}
guest.splice(0, guest.length);
console.log(guest);
