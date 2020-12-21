import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { employeeForm, formKeys } from '../Models/formKeys.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  formKeys = formKeys;

  departments: string[] = ['HR', 'DevOps', 'Development', 'QA'];

  employeeForm: FormGroup = this.formBuilder.group({
    [this.formKeys.FIRST_NAME]: ['', Validators.required],
    [this.formKeys.LAST_NAME]: ['', Validators.required],
    [this.formKeys.SUBSCRIBE_NEWS_LETTER]: [true],
    [this.formKeys.DEPARTMENT]: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  commitForm() {
    const formValues = this.employeeForm.getRawValue() as employeeForm;
    formValues.fullName = `${formValues.firstName} ${formValues.lastName}`;

    console.log(formValues);
  }
}
