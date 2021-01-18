import { Observable } from 'rxjs';
import { ShipsService } from './../ships.service';
import { Component, OnInit } from '@angular/core';
import { Ship } from './../ship'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starships: any;
  starshipsList: any;
  pageNum :number =1;
  

  constructor(private shipsService: ShipsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pagination(1);

  }
    getships(){
      this.shipsService.getShips().subscribe((res) => {
        this.starships = res;
        this.starshipsList = this.starships.results.map((obj : any) => (
          { ...obj, id: `${obj.url.split('/')[5]}` }));
        console.log(this.starshipsList);
      })
    }
    pagination(pageNum : number){
      this.shipsService.changePage(pageNum).subscribe((res) =>{
        this.pageNum++;
        this.starships =res;
        this.starshipsList= this.starships.results.map((obj : any) => (
          { ...obj, id: `${obj.url.split('/')[5]}` }));
      })
      console.log(pageNum);
    }
    
}

 //http://swapi.dev/api/starships/?page=2", 
    


  


