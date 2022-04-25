import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/userService';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  formGroup: FormGroup;
  isFormSubmitted = false;
  users: any;
  employeeNumber: any;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employeeNumber = this.activeRoute.snapshot.params['employeeNumber'];
    console.log('epmolyeenumber', this.employeeNumber);

    this.users = this.userService.getUser(this.employeeNumber);

    // this.users = this.userService.getUsers();
    console.log('users is ', this.users);
    this.setupForm();
  }
  setupForm() {
    console.log('userrrr', this.users);

    this.formGroup = this.formBuilder.group({
      firstname: [this.users.firstName, { validators: [Validators.required] }],
      lastName: [this.users.lastName, { validators: [Validators.required] }],

      email: [this.users.email, { validators: [Validators.required] }],
      phoneNumber: [
        this.users.phone,
        {
          validators: [
            Validators.required,
            Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
          ],
        },
      ],
    });
  }
  submitForm() {
    if (!this.formGroup.valid) {
      return;
    }
    this.isFormSubmitted = true;
    let formBody = {
      firstName: this.formGroup.get('firstname').value,
      lastName: this.formGroup.get('lastName').value,
      email: this.formGroup.get('email').value,
      phone: this.formGroup.get('phoneNumber').value,
    };
    console.log('formBody', formBody);
    this.userService.editUser(this.employeeNumber, formBody);
    this.isFormSubmitted = false;
    this.router.navigate(['/']);
  }
  cancel() {
    this.router.navigate(['/']);
  }
}
