const password_regex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})'
const jwt_secret = "cvnbkwbir"


module.exports = { password_regex, jwt_secret }