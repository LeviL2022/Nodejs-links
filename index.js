import * as fs from 'node:fs';

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}


function trataErro(erro) {
    throw new Error(erro.code, 'O caminho é um diretorio');
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    } catch{
        trataErro(erro);

    }
}

export default pegaArquivo;


//function pegaArquivo(caminhoDoArquivo) {
//    const encoding = 'utf-8'
//    fs.promises
//        .readFile(caminhoDoArquivo, encoding)
//        .then((texto) => (console.log(texto)))
//        .catch((erro) => trataErro(erro))
//}


//function pegaArquivo(caminhoDoArquivo) {
//    const encoding = 'utf-8';
//    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//        if (erro) {
//            trataErro(erro);
//        }
//        console.log(chalk.green(texto));
//    })
//}

