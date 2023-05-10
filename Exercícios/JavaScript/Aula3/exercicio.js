// Nome das frutas
let fruta1 = "kiwi";
let fruta2 = "Banana";
let fruta3 = "Laranja";
let fruta4 = "Tangerina";
let fruta5 = "Mamão";

//Retornar a quantidade de letras (length)
let tamanho1 = fruta1.length;
let tamanho2 = fruta2.length;
let tamanho3 = fruta3.length;
let tamanho4 = fruta4.length;
let tamanho5 = fruta5.length;

//  Mostrar os 3 primeiros caracteres (substring)
let sub1 = fruta1.substring(0, 3);
let sub2 = fruta2.substring(0, 3);
let sub3 = fruta3.substring(0, 3);
let sub4 = fruta4.substring(0, 3);
let sub5 = fruta5.substring(0, 3);

//  Limpar caracter em branco do início (trim)
fruta1 = fruta1.trim();
fruta2 = fruta2.trim();
fruta3 = fruta3.trim();
fruta4 = fruta4.trim();
fruta5 = fruta5.trim();

// Após receber as strings sobrepor o conteúdo (replace) em caixa baixa (toLowerCase)
fruta1 = fruta1.toLowerCase();
fruta2 = fruta2.toLowerCase();
fruta3 = fruta3.toLowerCase();
fruta4 = fruta4.toLowerCase();
fruta5 = fruta5.toLowerCase();

// Exibir a listagem de frutas recebidas em Template String
console.log(`As frutas são:
 ${fruta1}
- ${fruta2}
- ${fruta3}
- ${fruta4}
- ${fruta5}`);

// Exibir as informações adicionais sobre cada fruta
console.log(`Informações adicionais:
${fruta1}: comprimento = ${tamanho1}, 3 primeiros caracteres = ${sub1}
${fruta2}: comprimento = ${tamanho2}, 3 primeiros caracteres = ${sub2}
${fruta3}: comprimento = ${tamanho3}, 3 primeiros caracteres = ${sub3}
${fruta4}: comprimento = ${tamanho4}, 3 primeiros caracteres = ${sub4}
${fruta5}: comprimento = ${tamanho5}, 3 primeiros caracteres = ${sub5}`);
