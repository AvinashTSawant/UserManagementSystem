import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedUserSubject = new BehaviorSubject<User>(null);
  selectedUser = this.selectedUserSubject.asObservable();

  constructor() {}

  setSelectedUser(user: User): void {
    this.selectedUserSubject.next(user);
  }

  notifyUserChange(): void {
    this.selectedUserSubject.next(null);
  }
}
