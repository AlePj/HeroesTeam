import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {
list = "";
dataList = "";
  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.list = this.getHeroesList();
    this.dataList = this.getDataList();
  }

  getHeroesList(){
   return JSON.parse(localStorage.getItem("team") || "[]");
  }

  getDataList(){
    return JSON.parse(localStorage.getItem("dataTeam") || "[]");
   }

  deleteHero(id){
    let listHeroes = this.getHeroesList();
    let filterHeroes = listHeroes.filter(hero => hero.id !== id);
    localStorage.setItem("team", JSON.stringify(filterHeroes));
    this.list = filterHeroes;
  }
}
