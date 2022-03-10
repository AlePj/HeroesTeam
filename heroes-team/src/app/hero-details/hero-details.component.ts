import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  heroId;
  heroDetails;
  img;
  constructor(
    public router: ActivatedRoute,
    public route: Router,
    public heroService: HeroesService
  ) { }

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const heroID = Number(routeParams.get('idHero'));
    this.heroId = heroID;
    this.heroService.getHero(this.heroId).subscribe((data:any)=>{
      const result = data.data.results;
      this.heroDetails = result.map(hero=>{
        this.img = hero.thumbnail.path + '.' + hero.thumbnail.extension;
        let comics = hero.comics.items;
        let sliceComics = comics.slice(0,4);
        let splitUrl = comics[0].resourceURI.split("/")[6];
        return {name:hero.name, id: hero.id, thumb: hero.thumbnail.path, description:hero.description, comics:sliceComics, url:splitUrl};
      }); 
    })    
  }


}
