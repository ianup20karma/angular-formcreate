import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersListService } from './users-list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  visa2FlyForm: FormGroup = new FormGroup({});
  subscription = new Subscription();
  usersData = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersListService
  ) {}

  ngOnInit() {
    this.createForm();
    this.subscription = this.userService.getUsers().subscribe((res) => {
      this.usersData = res.data;
      console.log(res.data);
    })
  }

  createForm(): void {
    this.visa2FlyForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  formSubmit(): void {
    console.log(this.visa2FlyForm.value);
  }
}
