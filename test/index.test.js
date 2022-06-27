import pegaArquivo from '../index.js';

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('Deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('Deve retornar um array com resultados', async () => {
        const results = await pegaArquivo('/home/leonardo/Documents/NodeJS/test/arquivos/texto1.md')
        expect(results).toEqual(arrayResult)
    })
    it('Deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('/home/leonardo/Documents/NodeJS/test/arquivos/texto_semlinks.md')
        expect(resultado).toBe('Não há links')
    })

    //Testes para erro.

    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('/home/juliana/Documents/alura/lib-markdown/test/arquivos')).rejects.toThrow(/não há arquivo no caminho/)
    })

    it('deve resolver a função com sucesso', async () => {
        await expect(pegaArquivo('/home/juliana/Documents/alura/lib-markdown/test/arquivos/texto1.md')).resolves.toEqual(arrayResult)
    })
})



