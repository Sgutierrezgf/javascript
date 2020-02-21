function diasEntreFechas(fecha1, fecha2) {
    const UNDIA = 1000 * 60 * 60 * 24
    const DIFERENCIA = Math.abs(fecha1 - fecha2)

    return Math.floor(DIFERENCIA / UNDIA)
}

const HOY = new Date()
const NACIMIENTO = new Date(1988, 7, 24)