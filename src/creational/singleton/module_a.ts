import { MyDbClassic } from './db/mydb-classic';

const myDB = MyDbClassic.instance;
myDB.add({ name: 'Toniel', age: 26 });
myDB.add({ name: 'Beatriz', age: 22 });
myDB.add({ name: 'Lucas', age: 24 });
myDB.show();
