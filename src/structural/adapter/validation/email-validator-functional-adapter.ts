import isEmail from 'validator/lib/isEmail';
import { EmailValidatorFnProtocol } from './email-validator-protocol';

// no caso de adapters de um método podemos criar funcional ao invés de classe
export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (
  value: string
) => {
  return isEmail(value);
};
