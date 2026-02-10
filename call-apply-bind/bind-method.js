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

// bind()

// 1. Does not execute the function immediately.
// 2. bind() method creates a new function with 'this' keyword permanently fixed to a specific value.
// 3. The new function can be executed any where in the code.

let introRider3Team = rider1.team.bind(rider3);
introRider3Team();