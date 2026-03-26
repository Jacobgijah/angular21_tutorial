import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isActive } from '@angular/router';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isOfferCodeAvl: boolean = false;
  studentTotalMarks: number = 0;

  isSuccesDivVisible: WritableSignal<boolean> = signal(false);

  offerList: string[] = [
    "20% off BtcPay",
    "10% off MavaPay",
    "15% off ChapPay",
  ];

  productCategoryList: string[] = [
    "Electronics",
    "Clothing",
    "Books",
    "Home & Kitchen",
  ];

  employeeList = [
    { name: 'Alice', department: 'HR', isActive: true },
    { name: 'Bob', department: 'Engineering', isActive: false },
    { name: 'Charlie', department: 'Marketing', isActive: true },
  ];

  toggleDivVisibility() {
    this.isSuccesDivVisible.set(!this.isSuccesDivVisible());
  }
}
