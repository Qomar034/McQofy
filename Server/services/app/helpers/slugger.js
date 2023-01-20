const nonChars = `!@#$%^&*=+~'";:,./?()[]{}|`

const slugger = (string) => {
    let slug = ''
    string.split("").forEach(el => {
        let flag = true
        nonChars.split("").forEach(char => {
            if (el == char) flag = false
        })

        if (flag) {
            if (el == ' ') slug += '-'
            else slug += el
        }
    })
    return slug.toLocaleLowerCase()
}

module.exports = slugger