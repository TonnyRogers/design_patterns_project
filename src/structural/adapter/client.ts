import { EmailValidatorAdapter } from './validation/email-validator-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-functional-adapter';

const emailValidatorAdapter = new EmailValidatorAdapter();
const email = 'tony.amaralgmail.com';
if (emailValidatorAdapter.isEmail(email)) {
  console.log('CLASS:', 'Valid email');
} else {
  console.log('CLASS:', 'Invalid email');
}

if (emailValidatorFnAdapter(email)) {
  console.log('FUNC:', 'Valid email');
} else {
  console.log('FUNC:', 'Invalid email');
}
