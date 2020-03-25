import { Component, OnInit } from '@angular/core';
import { RetailStoreModel } from './retail-store.model';
import { RetailerStoreService } from './retail-store.service';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-retail-store',
  templateUrl: './retail-store.component.html',
  styleUrls: ['./retail-store.component.css'],
  providers: [RetailerStoreService]
})
export class RetailStoreComponent implements OnInit {

  location: string = "";
  reportHeaders = ['skuId', 'skuDetails', 'location', 'department', 'category', 'subCategory', 'Action'];
  recordsList: any = [];
  retailerModel: RetailStoreModel = new RetailStoreModel();
  retailStoreForm: FormGroup;
  sampleform: FormGroup;
  locationList: Object;
  departmentActive: boolean = false;
  categoryActive: boolean = false;
  subCategoryActive: boolean = false;
  departmentList: Object;
  categoryList: Object;
  tempLocationName: any;
  tempDepartmentName: any;
  tempCategoryName: any;
  subCategoryList: Object;
  tempCategory: any;
  constructor(private fb: FormBuilder, private retailService: RetailerStoreService) {
  }
  ngOnInit(): void {
    this.retailStoreForm = this.fb.group({
      skuId: [""],
      skuDetails: ["", Validators.required],
      location: ["", Validators.required],
      department: ["", Validators.required],
      category: [""],
      subCategory: [""]
    });
    this.getRetailsDetails(null, null, null, null);
    this.getLocationList();
  }

  submitRetailData() {
    this.retailService.saveRetail(this.retailStoreForm.value).subscribe(data => {
      this.retailStoreForm.reset();
      this.getRetailsDetails(null, null, null, null);


    })
  }
  deleteRetail(id: any) {
    if (confirm("Are you sure you want to delete the retail ?")) {
      this.retailService.deleteRetail(id).subscribe(data => {
        this.getRetailsDetails(null, null, null, null);
      })
    }
  }
  editRetail(id: any) {
    this.retailService.getRetailById(id).subscribe(data => {
      this.retailStoreForm.patchValue(data);
    })
  }
  getRetailsDetails(location: any, department: any, category: any, subCategory: any) {
    this.retailService.getAllRetailDetails(location, department, category, subCategory).subscribe(data => {
      this.recordsList = data;
    })
  }

  getLocationList() {
    this.retailService.getAllLocationDetails().subscribe(data => {
      this.locationList = data;
    });
  }


  getDepartmentByLocation(loc: any) {
    this.tempLocationName = loc;
    this.retailService.getDepartment(loc).subscribe(data => {
      this.departmentList = data;
      this.departmentActive = true;
      this.getRetailsDetails(loc, null, null, null);
    });
  }

  getCategoryList(department: any) {
    this.tempDepartmentName = department
    this.retailService.getCategory(this.tempLocationName, department).subscribe(data => {
      this.categoryList = data;
      this.categoryActive = true;
      this.getRetailsDetails(this.tempLocationName, department, null, null);
    });
  }
  getsubCategoryList(category: any) {
    this.tempCategory = category;
    this.retailService.getsubCategory(this.tempLocationName, this.tempDepartmentName, category).subscribe(data => {
      this.subCategoryList = data;
      this.subCategoryActive = true;
      this.getRetailsDetails(this.tempLocationName, this.tempDepartmentName, category, null);
    });
  }
  getData(subCategory: any) {
    this.getRetailsDetails(this.tempLocationName, this.tempDepartmentName, this.tempCategory, subCategory);
  }
}
