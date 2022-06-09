import { MyDbClassic } from './db/mydb-classic';

const myDB = MyDbClassic.instance;
myDB.add({ name: 'Viviane', age: 22 });
myDB.add({ name: 'Renato', age: 27 });
myDB.add({ name: 'Jegue', age: 14 });
