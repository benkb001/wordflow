import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'Form',
    templateUrl: './form.component.html'
})
export class FormComponent { 
    @Input() formGroup!: FormGroup; 
    @Output() formSubmit = new EventEmitter<void>();

    onSubmit(): void {
        this.formSubmit.emit();
    }
}