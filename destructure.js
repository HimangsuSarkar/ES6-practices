const person = {
    name: "tomok vai",
    phone: "10100000",
    address: "cawar sohor",
    profession: "leader",
    teamName: "koi tora"
}

const { teamName, phone, address } = person;
console.log(teamName, address, phone);


const complxPerson = {
    boroVaiName: "neta mute",
    address: {
        info: "bola jabe na",
        phone: "00000000"
    },
    profession: "leader",
    teamName: "koi tora"
}
const { info } = complxPerson.address;
console.log(info);

const country = ['bangladesh', 'china', 'nepal', 'india', 'thailand', 'dubai'];
const [prothomCountry, ...restCountry] = country;
console.log(prothomCountry);
console.log(restCountry);
