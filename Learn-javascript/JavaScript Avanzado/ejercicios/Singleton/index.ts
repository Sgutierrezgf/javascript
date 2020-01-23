import Singleton from './Singleton'

const A = Singleton.getInstance()
const B = Singleton.getInstance()

console.log("A es igual a B", A === B)