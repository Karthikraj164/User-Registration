import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

   registrationForm : FormGroup = new FormGroup({});
   userData: User = {} as User ;
   showMessage: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.loadDefaultAddress();
    this.registrationForm.valueChanges.subscribe(() => {
      this.showMessage = false;
    })
  }

  public initializeForm(): void {
    this.registrationForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      address: this.fb.array([])
    });
  }

  get address() {
    return this.registrationForm.controls["address"] as FormArray;
  }

  public loadDefaultAddress(): void {
    const defaultAddress = this.fb.group({
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
    });
    this.address.push(defaultAddress);
  }

  public addAddress(): void {
    const addressForm = this.fb.group({
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
    });
    this.address.push(addressForm);
    this.showMessage = false;
  }

  public deleteAddress(index: number): void {
    this.address.removeAt(index);
  }

  public registerUser(): void {
    this.userData = this.registrationForm.value;
    this.userService.userDetails.push(this.userData);
    this.showMessage = true;
  }

}
