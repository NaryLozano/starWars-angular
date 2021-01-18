import { StarshipsListComponent } from './../starships-list/starships-list.component';
import { Observable } from 'rxjs';
import { ShipsService } from './../ships.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ship } from './../ship';



@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  oneShip: any;

  get shipId(){
    return this.route.snapshot.paramMap.get('id')!;
  }

  ship$ = this.shipsService.getStarshipId(this.shipId)


  constructor(private shipsService: ShipsService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.shipId);
    this.ship$.subscribe((res) => {
      this.oneShip = res;
      console.log(this.oneShip)
    })
  }
}