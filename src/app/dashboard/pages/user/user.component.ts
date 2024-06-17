import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { minAgeValidator, passwordMatchValidator, passwordStregthValidator } from '../../../validators/custom-validator';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent implements OnInit{
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nombres: ['', Validators.required],
      apePat: ['', Validators.required],
      apeMat: ['', Validators.required],
      fechanac: ['', [Validators.required, minAgeValidator(13)]],
      direccion: ['', Validators.required],
      usuario: ['', Validators.required],
      correo: ['', Validators.required],
      passwd: ['', [Validators.required, passwordStregthValidator()]],
      repasswd: ['', Validators.required],
    }, {
      validators: passwordMatchValidator('passwd', 'repasswd')
    });
  }

  submitForm() {
    if (this.userForm.valid)
      console.log("Hello!");
  }



}
