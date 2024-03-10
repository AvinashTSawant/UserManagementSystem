import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }
  
  
  editUser(user: User): void {
    this.dataService.setSelectedUser(user);
    this.userService.getUsers().subscribe(users => (this.users = users));
    this.router.navigateByUrl('/upsert');
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.getUsers().subscribe(users => (this.users = users));
    });
  }
}