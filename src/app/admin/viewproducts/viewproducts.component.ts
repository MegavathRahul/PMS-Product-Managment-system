import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Mobile } from '../../models/mobile.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
  mobiles: Mobile[] = [];
  editMobileIndex: number | null = null;
  editMobileObj = new Mobile('', '', '');
  editMobileStatus: boolean = false;

  constructor(private dsObj: DataService) { }

  ngOnInit(): void {
    this.dsObj.getMobilesData().subscribe(
      res => {
        this.mobiles = res;
      },
      err => {
        console.log("Error in reading products", err);
      }
    );
  }

  editMobile(mobileObj: Mobile, ind: number): void {
    debugger
    this.editMobileObj = { ...mobileObj };  // Use a copy of the object to avoid modifying the original data
    this.editMobileIndex = ind;
    this.editMobileStatus = true;
  }


  saveMobile(): void {
    debugger
    // Ensure editMobileIndex is not null and is a valid number
    if (this.editMobileIndex !== null && typeof this.editMobileIndex === 'number') {
      this.dsObj.updateMobile(this.editMobileObj).subscribe(
        res => {
          console.log('Mobile data updated successfully', res);

          // Update the mobiles array with the modified object (cast editMobileIndex as number)
          this.mobiles[this.editMobileIndex as number] = { ...this.editMobileObj };

          // Reset the edit mode and index after saving
          this.resetEditMode();
        },
        err => {
          console.log('Error updating mobile data', err);
        }
      );
    }
  }


  resetEditMode(): void {
    this.editMobileIndex = null;
    this.editMobileStatus = false;
    this.editMobileObj = new Mobile('', '', '');
  }

  deleteMobile(mobileObj: Mobile) {
    console.log("mobile to delete", mobileObj['id']);
    this.dsObj.deleteMobile(mobileObj['id']).subscribe(
      res => {
        // Remove the deleted mobile from the array
        this.mobiles = this.mobiles.filter(mobile => mobile['id'] !== mobileObj['id']);
        console.log("res is", res);
        alert("Mobile deleted");
      },
      err => {
        console.log("err in delete mobile", err);
      }
    );
  }

}





