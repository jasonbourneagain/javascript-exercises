const findTheOldest = function(people) {
    people.sort((a,b) => {
        const ageA = (a.yearOfDeath-a.yearOfBirth);
        const ageB = (b.yearOfDeath-b.yearOfBirth);
        return ageB - ageA;
    });
    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
