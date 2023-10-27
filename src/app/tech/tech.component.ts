import { Component, OnInit } from '@angular/core';
import { CgnewsapiService } from '../service/cgnewsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
 
  constructor(private api: CgnewsapiService){ }
   
  //Display techNews data in new variable 
  techNewsData:any = [];

  ngOnInit(): void {
    this.api.cgTechNews().subscribe((result)=>{
      console.log(result.articles);
      this.techNewsData = result.articles;
      })
  }
}
