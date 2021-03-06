import { MatDialogRef } from '@angular/material/dialog';
import { CompanyService } from './../company.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Company } from './../Model/company.model';
import { Component, OnInit } from '@angular/core';
import { CompanyListComponent } from '../company-list/company-list.component';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  company : Company;
  addForm : FormGroup;

  constructor(private fb : FormBuilder, private companyService : CompanyService, public dialogRef: MatDialogRef<CompanyListComponent>) { 
    this.createForm();
  }

  createForm(){
    this.addForm = this.fb.group({
      companyName : new FormControl('')
    });
  } 

  ngOnInit(): void {
    this.company = new Company();
  }

  onSubmit(){
    this.company.companyName = this.addForm.get('companyName').value;
    this.companyService.postCompany(this.company).subscribe(); 
    this.dialogRef.close(true);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
