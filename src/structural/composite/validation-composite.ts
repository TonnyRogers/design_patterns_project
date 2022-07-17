abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

class ValidateHasNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validated = child.validate(value);
      if (!validated) return false;
    }

    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

// Client Code
const validateEmail = new ValidateEmail();
const validateNumber = new ValidateHasNumber();
const validateString = new ValidateString();
const validations = new ValidationComposite();

validations.add(validateEmail, validateNumber, validateString);

if (validations.validate('Mane1@gmail.com')) {
  console.log('Validation Complete!');
} else {
  console.log('Ops! Validation Fail');
}
