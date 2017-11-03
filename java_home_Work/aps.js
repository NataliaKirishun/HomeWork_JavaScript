let regUserName = /^[А-ЯЁ][а-яё\-]+$/,
    regUserYearOfBorn = /^[1-2][0-9]{3}$/,
    regUserMonthOfBorn = /([Яя]нвар[ьея]|[Фф]еврал[ьея]|[Мм]арт[еа]?|[Аа]прел[ьея]|[Мм]а[йея]|[Ии]ю[нл][яье]|[Аа]вгуст[еа]?)|(?:[Cс]ент|[Оо]кт|[Нн]о|[Дд]ек)[ая]бр[яье]/,
    regUserGender = /^(?:[Мм]уж|[Жж]ен)(ск[ои][й])?$/,
    regUserCountryAndCity=/^[A-ЯЁ][а-яё\-]+$/,
    regUserTypeOfSettlementAndStreet =/[1-4]/,
    inputTextFirstName = 'Введите Ваше имя',
    inputTextSecondName = 'Введите Вашу фамилию',
    inputTextPatronymicName = 'Введите Ваше отчество',
    inputTextYearOfBorn = 'Введите год Вашего рождения',
    inputTextMonthOfBorn = 'Введите месяц Вашего рождения',
    inputTextDayOfBorn = 'Введите число Вашего рождения',
    inputTextGender = 'Укажите Ваш пол',
    inputTextUserCountry = 'В какой стране Вы проживаете?',
    inputTextTypeOfSettlement = `Укажите тип населенного пункта: 
                                 1 - Город,
                                 2 - Городской посёлок,
                                 3 - Деревня,
                                 4 - Село`,
    inputTextUserCity = 'Введите название вашего населенного пункта',
    inputTextTypeOfStreet = `Введите тип улицы, на которой Вы живете:
                             1 - Улица,
                             2 - Переулок, 
                             3 - Проспект,
                             4 - Тракт`,
    inputTextNameOfStreet = 'Введите название Вашей улицы',
    inputTextHouseNumber = 'Введите номер дома, в котором Вы проживаете',
profileUserFirstName = userInput(regUserName, inputTextFirstName),
profileUserSecondName = userInput(regUserName, inputTextSecondName),
profileUserPatronymicName = userInput(regUserName, inputTextPatronymicName),
profileUserYearOfBorn = userInput(regUserYearOfBorn, inputTextYearOfBorn),
profileUserMonthOfBorn = userInput(regUserMonthOfBorn, inputTextMonthOfBorn),
inputNumberOfMonth = numberOfMonth(profileUserMonthOfBorn),
profileUserMonthOfBornInGenitive =  monthGenitive (inputNumberOfMonth),
maxCountOfDayInMonthOfBorn = maxNumberOfDays(inputNumberOfMonth, profileUserYearOfBorn),
profileUserDayOfBorn = userInputDay(maxCountOfDayInMonthOfBorn,inputTextDayOfBorn),
profileUserGender = userInput (regUserGender, inputTextGender),
profileUserCountry=userInput (regUserCountryAndCity, inputTextUserCountry),
inputNumberTypeOfSettlement = userInput (regUserTypeOfSettlementAndStreet,inputTextTypeOfSettlement),
profileTypeOfSettlement = nameOfSettlement (inputNumberTypeOfSettlement),
profileNameOfSettlement = userInput (regUserCountryAndCity, inputTextUserCity),
inputNumberTypeOfStreet = userInput (regUserTypeOfSettlementAndStreet,inputTextTypeOfStreet),
profileTypeOfStreet =  nameOfStreet (inputNumberTypeOfStreet),
profileNameOfStreet = userInput (regUserCountryAndCity, inputTextNameOfStreet),
profileNumberOfHouse = prompt (inputTextHouseNumber),
inputUserAge = 2017 - profileUserYearOfBorn;
profileIsPension = isPension (inputUserAge, profileUserGender);
alert(`
ФИО: ${profileUserSecondName} ${profileUserFirstName}  ${profileUserPatronymicName}
Дата рождения: ${profileUserDayOfBorn} ${profileUserMonthOfBornInGenitive} ${profileUserYearOfBorn}
Пол: ${profileUserGender}
Адрес: ${profileUserCountry}, ${profileTypeOfSettlement} ${profileNameOfSettlement}, ${profileTypeOfStreet} ${profileNameOfStreet}, д. ${profileNumberOfHouse} 
На пенсии: ${profileIsPension} 
`);
function userInput(reg, str) {
    let dataInput;
    do {
        dataInput = prompt(str);
    }
    while (!reg.test(dataInput));
    return dataInput;
}
function userInputDay(max, str) {
    let dayInput;
    do {
        dayInput = prompt(str);
    }
    while (dayInput > max);
    return dayInput;
}
function nameOfSettlement (num) {
    let typeOfSettlement='';
    if  (num === '1')
        typeOfSettlement = 'г.';
    if  (num === '2')
        typeOfSettlement = 'г.п.';
    if  (num === '3')
        typeOfSettlement = 'д.';
    if  (num === '4')
        typeOfSettlement = 'с.';
        return typeOfSettlement;
    }
function nameOfStreet (num) {
    let typeOfSettlement='';
    if  (num === '1')
        typeOfSettlement = 'ул.';
    if  (num === '2')
        typeOfSettlement = 'пер.';
    if  (num === '3')
        typeOfSettlement = 'пр.';
    if  (num === '4')
        typeOfSettlement = 'тр.';
    return typeOfSettlement;
}
function monthGenitive (num) {
    let monthInGenitive;
    switch (true) {
        case num === 1:
            monthInGenitive = 'января';
            break;
        case num === 2:
            monthInGenitive = 'февраля';
            break;
        case num === 3:
            monthInGenitive = 'марта';
            break;
        case num === 4:
            monthInGenitive = 'апреля';
            break;
        case num === 5:
            monthInGenitive = 'мая';
            break;
        case num === 6:
            monthInGenitive = 'июня';
            break;
        case num === 7:
            monthInGenitive = 'июля';
            break;
        case num === 8:
            monthInGenitive = 'августа';
            break;
        case num === 9:
            monthInGenitive = 'сентября';
            break;
        case num === 10:
            monthInGenitive = 'октября';
            break;
        case num === 11:
            monthInGenitive = 'ноября';
            break;
        case num === 12:
            monthInGenitive = 'декабря';
            break;
    }
    return monthInGenitive;
}
function numberOfMonth(month) {
    let i = 0;
        switch (true) {
        case /^[Яя]нвар[ьея]$/.test(month):
            i = 1;
            break;
        case /^[Фф]еврал[ьея]$/.test(month):
            i = 2;
            break;
        case /^[Мм]арт[еа]?$/.test(month):
            i = 3;
            break;
        case /^[Аа]прел[ьея]$/.test(month):
            i = 4;
            break;
        case /^[Мм]а[йея]$/.test(month):
            i = 5;
            break;
        case /^[Ии]ю[н][яье]$/.test(month):
            i = 6;
            break;
        case /^[Ии]ю[л][яье]$/.test(month):
            i = 7;
            break;
        case /^[Аа]вгуст[еа]?$/.test(month):
            i = 8;
            break;
        case /^[Cс]ентябр[яье]$/.test(month):
            i = 9;
            break;
        case /^[Оо]ктябр[яье]$/.test(month):
            i = 10;
            break;
        case /^[Нн]оябр[яье]$/.test(month):
            i = 11;
           break;
        case /^[Дд]екабр[яье]$/.test(month):
            i = 12;
            break;
            }
    return i;
}
function maxNumberOfDays(month, year) {
    let maxNumberOfDays;
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        maxNumberOfDays = 31
    }
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        maxNumberOfDays = 30
    }
    if (month === 2) {
        if (year % 4 !== 0 || year % 100 === 0 && year % 400 !== 0) {
            maxNumberOfDays = 28
        }
        else {
            maxNumberOfDays = 29
        }
    }
    return maxNumberOfDays;
}
function isPension (age,str) {
   let isOnPension = 'нет';
   if (str === 'муж'||str === 'мужской') {
       if (age > 63) isOnPension = 'да';
       }
   if (str === 'жен'||str === 'женский') {
       if(age>58) isOnPension = 'да';
   }
   return isOnPension;
}
