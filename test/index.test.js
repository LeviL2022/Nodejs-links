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
})

