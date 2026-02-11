let rider1 = {
    name: "Valentino Rossi",
    number: 46,
    club: "Yamaha",
    country: "Italy",
    championship: 9,
    participated: 10,
    podiums: function totalPodiums (podium, lost) {
        console.log((this.participated * podium) / lost);
    }
};

let rider2 = {
    name: "Alex",
    number: 42,
    club: "Suzuki",
    country: "Italy",
    championship: 9,
    participated: 2,
};

// pre-set value for bind(): we can pre-set some arrguments when you bind the function and provide the remaining
// arguments when we actually call the new function.

let podiumWins = rider1.podiums.bind(rider2, 3); // pre-setting some arguments when binding the function.
podiumWins(2); // providing the remaning arguments while calling the new function.