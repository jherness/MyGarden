/* jshint esversion:6*/ 

function upcase(strings, ...values){
    return values.map(name => name[0].toUpperCase() +
    name.slice(1)).join(' ') + strings[2];
}

const person = {
    first: 'brenden',
    last: 'eich',
    age: 56,
    position: 'Ceo of Brave software'
};

const {first, last} = person;

const emoticon = [[' ', '('], ['*', '-'], ['*', ')', ' ']];

console.log(
    upcase`${first} ${last} is the creator of JavaScript!` + emoticon.flat().join('')
);
