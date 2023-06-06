import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
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
      fullName: ['', [Validators.required, Validators.minLength(5)]],
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

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('invalid form');
    }
  }
}
