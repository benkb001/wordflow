import { AbstractControl, ValidationErrors } from '@angular/forms';
import { get } from 'lodash'; 

export default function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = get(group, 'controls.password.value');
    const confirm = get(group, 'controls.passwordConfirm.value'); 
    const works = password === confirm ? null : { passwordsDoNotMatch: true };
    return works; 
}