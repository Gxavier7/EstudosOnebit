const dayjs = require("dayjs");
const locale = require('dayjs/locale/br');
const now = dayjs();

function dataCalc(str) {
  const bornDate = dayjs(str, "DD-MM-YYYY");
  const age = currentAge(bornDate);
  const birthday = nextBirthday(bornDate, age) ;
  const daysToBirthday = toBirthday(birthday)+1
  console.log(`O usuário possui: ${age} anos`);
  console.log(`O próximo aniversário deste usuário será dia: ${birthday.format('DD/MM/YYYY')} `);
  console.log(`O próximo aniversário deste usuário será daqui: ${daysToBirthday} dias`);
  
};

function currentAge(bornDate) {
  return now.diff(bornDate, 'year');
};

function nextBirthday(bornDate, age) {
  return bornDate.add(age + 1, "year");
};

function toBirthday(birthday) {
  return birthday.diff(now, "days")
};

dataCalc('12/10/2014');