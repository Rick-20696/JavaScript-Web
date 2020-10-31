"use strict";
const employee2 = {
    sups: [
        'Teixeira',
        'Herran',
        'Sousa'
    ],
    point: (hour) => {
        let str = 'On time';
        if (hour > 8)
            str = "You're late";
        return str;
    }
};
