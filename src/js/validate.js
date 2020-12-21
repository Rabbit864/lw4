export class Validate {
  static checkRequired(element) {
    return element.length < 1;
  }

  static checkValidEmail(email) {
    const regularExpressionForCheckingMail = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpressionForCheckingMail.test(email);
  }

  static checkValidPassword(password) {
    return password.length >= 6;
  }
}
