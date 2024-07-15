// Проверка длины строк

function checkLengthString(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

// Строка короче 20 символов
checkLengthString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLengthString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLengthString('проверяемая строка', 10); // false


// Проверка полиндрома

function checkPalindrom(string) {
  string = string.toLowerCase();
  string = string.replaceAll(' ', '');

  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  return string === reversed;
}

// Строка является палиндромом
checkPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkPalindrom('ДовОд'); // true
// Это не палиндром
checkPalindrom('Кекс'); // false
// Это палиндром
checkPalindrom('Лёша на полке клопа нашёл '); // true


// Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true,
// если встреча не выходит за рамки рабочего дня, и false, если выходит.

// Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут использоваться как две цифры, так и одна.
// Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

// Продолжительность задаётся числом. Гарантируется, что и рабочий день,  и встреча укладываются в одни календарные сутки.

function getTimeInMinutes(time) {
  const [hours, minutes] = time.split(':');
  return hours * 60 + parseInt(minutes, 10);
}

const checkMeetingTime = (startDay, endDay, startMeeting, meetingTime) => {
  const startDayMinutes = getTimeInMinutes(startDay);
  const endDayMinutes = getTimeInMinutes(endDay);
  const startMeetingMinutes = getTimeInMinutes(startMeeting);

  return startMeetingMinutes >= startDayMinutes &&
  startMeetingMinutes + meetingTime <= endDayMinutes;
};


// eslint-disable-next-line no-console
console.log(checkMeetingTime('08:00', '17:30', '14:00', 90)); // true
// eslint-disable-next-line no-console
console.log(checkMeetingTime('8:0', '10:0', '8:0', 120)); // true
// eslint-disable-next-line no-console
console.log(checkMeetingTime('08:00', '14:30', '14:00', 90)); // false
// eslint-disable-next-line no-console
console.log(checkMeetingTime('14:00', '17:30', '08:0', 90)); // false
// eslint-disable-next-line no-console
console.log(checkMeetingTime('8:00', '17:30', '08:00', 900)); // false
