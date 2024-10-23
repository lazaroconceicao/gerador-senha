export interface SenhaProps {
    tamanho?: number
    numeros?: boolean
    maiusculas?: boolean
    minusculas?: boolean
    simbolos?: boolean
}

export default class Senha {

    private static readonly NUMEROS = '0123456789'
    private static readonly SIMBOLOS = '!@#$%*()_+-=[]{}|:,.<>?'
    private static readonly MINUSCULAS = 'abcdefghijlmnopqrstuvxz'
    private static readonly MAIUSCULAS = this.MINUSCULAS.toUpperCase()

    static gerar(props?: SenhaProps): string {
        const {
            tamanho = 8,
            numeros = false,
            minusculas = true,
            maiusculas = false,
            simbolos = false,
        } = props ?? {}

        if(tamanho < 4) throw new Error('Tamanho mínimo de 4 caracteres')
        if(![numeros, simbolos, minusculas, maiusculas].some(Boolean)){
            return ''
        }

        const caracteres = [
            numeros ? this.NUMEROS : '',
            simbolos ? this.SIMBOLOS : '',
            minusculas ? this.MINUSCULAS : '',
            maiusculas ? this.MAIUSCULAS : '',
        ].join('')

        let senha = ''

        for (let i = 0; i < tamanho; i++) {
            senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }

        return senha
    }

    static nivel(senha: string ) : 0 | 1 | 2 | 3 | 4 {
        return 1
    }
}

console.log(Senha.gerar({tamanho: 10, maiusculas: true, minusculas: true, simbolos: true, numeros: true }))