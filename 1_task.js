console.log('--- 1 задание ---');

const book = {
    title: 'Преступление и наказание',
    genre: 'Роман',
    author: 'Достоевский Федор Михайлович',
    pages: 952
}

const reader = Object.create(book);

reader.name = 'Марина';
reader.status = 'Опытный читатель';

function ownPproperties(object) {

    for (const [key, value] of Object.entries(object)) {
        console.log(`Ключ: ${key}, значение: ${value}`);
    }

}

ownPproperties(reader);

console.log('--- ---');




