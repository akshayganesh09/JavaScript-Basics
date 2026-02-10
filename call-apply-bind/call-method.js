let rider1 = {
    name: "Valentino Rossi",
    number: 46,
    club: "Yamaha",
    country: "Italy",
    championship: 9,
    team: function showTeam() {
        console.log(`I'm a member of ${this.club} motor sporting club.`)
    }
};

let rider2 = {
    name: "Marc Márquez",
    number: 93,
    club: "Honda",
    country: "Spain",
    championship: 8
}

let rider3 = {
    name: "Pecco Bagnaia",
    number: 63,
    club: "Ducati",
    country: "Italy",
    championship: 2
}

function selfIntroduce() {
    console.log(`Hello everyone! I'm ${this.name}, I'm from ${this.country}, and I'm ${this.championship}-time MotoGP World Champion.`);
}

// .call()

// 1. Is a function property that is used to invoke a function with a specified value for 'this' and arguments can also be provided individually.
// 2. This is a Immediately invoked function and arguments are passed as comma seperated strings.
// 3. .call() is used to 'borrow' methods from one object and use it in another object.

// Here one common method can be reused by different objects - which improves modularity.
selfIntroduce.call(rider1); // Output: Hello everyone! I'm Valentino Rossi, I'm from Italy, and I'm 9-time MotoGP World Champion.
selfIntroduce.call(rider2); // Output: Hello everyone! I'm Marc Márquez, I'm from Spain, and I'm 8-time MotoGP World Champion.
selfIntroduce.call(rider3); // Output: Hello everyone! I'm Pecco Bagnaia, I'm from Italy, and I'm 2-time MotoGP World Champion.

//Here a method in an object can be used by other object
rider1.team.call(); // Output: I'm a member of Yamaha motor sporting club.
rider1.team.call(rider2); // Output: I'm a member of Honda motor sporting club.
rider1.team.call(rider3); // Output: I'm a member of Ducati motor sporting club.