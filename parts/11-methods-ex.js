earlyComputers = {
    eniac: {
        computerName: 'ENIAC',
        yearOperational: 1945,
        leadership: ['John Mauchly', 'J. Presper Eckert'],
        engineers: ['J. Presper Eckert'],
        programmers: ['Jean Jennings', 'Betty Snyder', 'Frances Bilas', 'Kay McNulty', 'Marlyn Wescoff', 'Ruth Lictherman']
    },
    colossus: {
        computerName: 'COLOSSUS',
        yearOperational: 1943,
        mathematicians: ['Alan Turing', 'Max Newman'],
        operators: ['Dorothy Du Boisson', 'Jean Beech']
    },
    getEniac: function() {
        return this.eniac;
    },
    getWorkers: function(computer, job) {
        return this[computer][job];
    }
};

earlyComputers.describe = function() {
    return 'This is a bunch of data about war time computers';
};

console.log(earlyComputers.describe());

console.log(earlyComputers.getEniac());

console.log(earlyComputers.getWorkers('eniac', 'programmers'));
console.log(earlyComputers.getWorkers('colossus', 'operators'));

