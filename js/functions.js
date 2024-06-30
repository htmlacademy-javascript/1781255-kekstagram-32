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
