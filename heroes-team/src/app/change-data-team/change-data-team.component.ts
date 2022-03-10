import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {Router} from "@angular/router"
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-change-data-team',
  templateUrl: './change-data-team.component.html',
  styleUrls: ['./change-data-team.component.css']
})
export class ChangeDataTeamComponent implements OnInit {
  checkoutForm : FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { 
    this.checkoutForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    let dataTeam = JSON.parse(localStorage.getItem("dataTeam") || "[]");
    this.checkoutForm.controls['titulo'].setValue(dataTeam.name); 
    this.checkoutForm.controls['body'].setValue(dataTeam.description); 
  }

  onSubmit(): void {
    this.submitted = true;
   let name = this.checkoutForm.get('titulo').value;
   let description = this.checkoutForm.get('body').value;
    if(this.checkoutForm.valid){
      let dataTeam = JSON.parse(localStorage.getItem("dataTeam") || "[]");
    dataTeam = {name: name, description:description}; 
    localStorage.setItem("dataTeam", JSON.stringify(dataTeam));
          this.router.navigate(['/heroes/team']);
    }
  }
}
