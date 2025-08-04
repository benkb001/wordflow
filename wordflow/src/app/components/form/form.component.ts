import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'Form',
    templateUrl: './form.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FormComponent { 
    @Input() formGroup!: FormGroup; 
    @Output() formSubmit = new EventEmitter<void>();

    onSubmit(): void {
        this.formSubmit.emit();
    }
}