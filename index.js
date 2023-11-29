const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById('roots');
    const header = document.getElementById('header');
    const title = document.createElement('title');
    const items = document.getElementById('items');
    const top = `FREELANCERS`;

    header.innerHTML = top;

    const item = users.map(n => '<li>' + this.keys + '</li>');
    const html = item.join();
    console.log(item)
    
}

//call the main function
main();