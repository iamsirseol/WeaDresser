export function conditionPassword(password) { // 숫자, 영문, 특수문자 각 1자리 이상이면서 8자에서 16자 사이 통과
    let reg = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
    if (!reg.test(password)) {
        return false;
    }
    return true
}

export function conditionEmail(email) {
    let regExp = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!regExp.test(email)) {
        return false;
    }
    return true;
}