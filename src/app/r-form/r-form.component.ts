import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.scss'],
})
export class RFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fullName: ['', [Validators.required, this.validateFullName.bind(this)]],
      age: [],
      newsletter: [],
      language: [],
      rating: [],
      comments: [],
    });
  }

  get fullName(): FormControl {
    return this.form.controls['fullName'] as FormControl;
  }

  get age(): FormControl {
    return this.form.controls['age'] as FormControl;
  }

  get newsletter(): FormControl {
    return this.form.controls['newsletter'] as FormControl;
  }

  get language(): FormControl {
    return this.form.controls['language'] as FormControl;
  }

  get rating(): FormControl {
    return this.form.controls['rating'] as FormControl;
  }

  get comments(): FormControl {
    return this.form.controls['comments'] as FormControl;
  }

  validateFullName(ctrl: AbstractControl): ValidationErrors | null {
    const val = ctrl.value;

    return val.length > 3
      ? null
      : {
          my_error: true,
        };
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('invalid form');
    }
  }
}
