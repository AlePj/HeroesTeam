import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  constructor(
    public heroesService:HeroesService,
    public router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ) { 
      this.checkoutForm = this.formBuilder.group({
        name: [''],
      });
    }
  
   checkoutForm : FormGroup;
   submitted = false;
   heroes;
   page=1;
  
  ngOnInit(): void {
    let dataList = JSON.parse(localStorage.getItem("dataTeam") || "[]");
    if(dataList == ""){
     let dataTeam = {name: "Default Name", description:"Default Description"}; 
     localStorage.setItem("dataTeam", JSON.stringify(dataTeam));
    }
    this.heroes = this.loadHeroes();

  }
  

  loadHeroes(){
    let team = JSON.parse(localStorage.getItem("team") || "[]");
    this.heroesService.getRawHeroes(this.page).subscribe((data:any) => {
      if(data){
      const result = data.data.results;
      this.heroes = result.map(hero=>{
        return {name:hero.name, id: hero.id, check:false}
      });
      this.heroes.map(hero => {
        team.map(heroTeam => {
          if(hero.id == heroTeam.id){
            hero.check = true;
          }
        })
      });
     }
    });
  }
  
  addHero(id,name){
    let heroes = JSON.parse(localStorage.getItem("team") || "[]");
    
    if(heroes.length > 5){
      window.alert("No se puede tener mas de 6 heroes en tu equipo");
    }else{
      heroes.push({id: id, name:name}); 
      localStorage.setItem("team", JSON.stringify(heroes));
    }
      this.loadHeroes();
  }

  plusPage(){
    if(this.page>=1){
      this.page++
      localStorage.setItem('page',String(this.page));
      this.page = Number(localStorage.getItem('page'));
      this.loadHeroes()
    }
  }

  minusPage(){
    if(this.page>=1){
      this.page--
      localStorage.setItem('page',String(this.page));
      this.page = Number(localStorage.getItem('page'));
      this.loadHeroes();
    }
  }

  onSubmit(): void {
    this.submitted = true;
   let name = this.checkoutForm.get('name').value;
    const str2 = name.charAt(0).toUpperCase() + name.slice(1);
    if(this.checkoutForm.valid){
      if(str2 == ""){
        this.loadHeroes();
      }else{
        this.loadSearchHero(str2);
      }
        
    }
  }

  loadSearchHero(name){
    this.heroesService.getRawHeroes2().subscribe((data:any) => {
      if(data){
      const result = data.data.results;
      this.heroes = result.filter(hero=>hero.name.includes(name));
     }
    });
  }

  showMessage(){
    return window.alert("Este heroe ya está en tu equipo")
  }
}
