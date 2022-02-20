const { filterOrderByTag } = require('./fliter');

tags1 = 'ARAUCO PICK UP, arauco_pickup, boleta_generada, MIXTO, boleta';
tags2 = 'perro,gato,raton';
tags3 = 'perro,gato,raton,Arauco_Delivery';
tags4 = 'boleta_generada, STOCK, boleta';
tags5 = 'arauco_delivery';

console.log('type', filterOrderByTag(tags1));
console.log('type', filterOrderByTag(tags2));
console.log('type', filterOrderByTag(tags3));
console.log('type', filterOrderByTag(tags4));
console.log('type', filterOrderByTag(tags5));
