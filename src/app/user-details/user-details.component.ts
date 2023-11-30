import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserAddress } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  public userData: User[] = [];
  public adressArray: UserAddress[] = [];
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userData = this.userService.userDetails;
  }

  public deleteUser(index: number): void {
    this.userData.splice(index, 1);
  }
}
