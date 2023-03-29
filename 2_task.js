console.log('--- 2 задание ---');

const string = 'author';

const book_info = {
  title: 'Война и мир',
  genre: 'Роман',
  author: 'Толстой Лев Николаевич',
  pages: 1952
}

function comparison(str, obj) {
  for (let key in obj) {
    if (key === str) {
      return true;
    }
  }
  return false;
};

console.log('Проверка: ' + comparison(string, book_info));

console.log('--- ---');

