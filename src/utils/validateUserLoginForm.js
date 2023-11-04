export const validateUserLoginForm = (values) => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Please enter your username';
    } else if (values.username.length < 6 || values.username.length > 15) {
        errors.username = 'Username must be more than 6 characters and less than 15'
    }
    if (!values.password) {
        errors.password = 'Please enter your password';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be more than 8 characters';
    }
    return errors
}