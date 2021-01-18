import { Observable } from 'rxjs';
import { ShipsService } from './../ships.service';
import { Component, OnInit } from '@angular/core';
import { Ship } from './../ship'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starships: any;
  starshipsList: any;
  pageNum :number =0;
  //setPageNum :number = 1;

  constructor(private shipsService: ShipsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pagination();

  }
    getships(){
      this.shipsService.getShips().subscribe((res) => {
        this.starships = res;
        this.starshipsList = this.starships.results.map((obj : any) => (
          { ...obj, id: `${obj.url.split('/')[5]}` }));
        console.log(this.starshipsList);
      })
    }
    pagination(){
      this.pageNum++;
      this.shipsService.changePage(this.pageNum).subscribe((res) =>{
        this.starships =res;
        this.starshipsList= this.starships.results.map((obj : any) => (
          { ...obj, id: `${obj.url.split('/')[5]}` }));
      })
      console.log(this.pageNum);
    }

    prevPage(){
      this.pageNum--;
      this.shipsService.changePage(this.pageNum).subscribe((res) =>{
        this.starships =res;
        this.starshipsList= this.starships.results.map((obj : any) => (
          { ...obj, id: `${obj.url.split('/')[5]}` }));
      })
      console.log(this.pageNum);
      }
      
    
}

 //http://swapi.dev/api/starships/?page=2", 
    


  


