function divisionesEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0
    }

    return 1 + divisionesEntera(dividendo - divisor, divisor)
}