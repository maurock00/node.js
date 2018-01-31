/* 
Buffers 
    Una tira de bites (datos binarios)
    Similar a un array de enteros
    Tamaño fijo
    Manipular datos directamente
        Sockets
        Stremas
        Iplementar protocolos completos
        Manipulación de ficheros/imágenes
        Criptografía
*/

'use strict';

var buf = new Buffer(1000),
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be',
    i = 0;

buf.write('abcd', 0 , 4, 'ascii');
console.log(buf,
            buf.toString('ascii'),
            str,
            str.length + 'caracteres',
            Buffer.byteLength(str,'utf8') + 'bytes',
            buf2.length
           );

for(let i=0; i < buf2.length; i++)
{
    //97 en ASCII es a
    buf2[i] = i + 97;
    
}
console.log(buf2.toString('ascii')+'\n')

