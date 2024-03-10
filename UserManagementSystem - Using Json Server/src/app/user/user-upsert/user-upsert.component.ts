import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [''], // Unique ID
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });

    this.dataService.selectedUser.subscribe(user => {
      if (user) {
        this.userForm.patchValue(user);
      }
    });
  }

  saveUser(): void {
    const user: User = this.userForm.value;
   console.log(user);
   this.router.navigateByUrl('/list');
   
    if (user.id) {
      this.userService.updateUser(user).subscribe(() => {
        this.dataService.notifyUserChange();
      });
      
    } else {
      this.userService.addUser(user).subscribe(() => {
        this.dataService.notifyUserChange();
       
        
      });
    }

    this.userForm.reset();
  }
}
