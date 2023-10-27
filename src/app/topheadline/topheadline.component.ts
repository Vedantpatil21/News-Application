import { Component, OnInit } from '@angular/core';
import { CgnewsapiService } from '../service/cgnewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {
   
  constructor(private api: CgnewsapiService) {}

//Display headlines data in new variable 
topHeadlinesData:any = [];

  ngOnInit(): void {
    this.api.cgHeadlines().subscribe((result)=>{
    console.log(result.articles);
    this.topHeadlinesData = result.articles;
    })
  }

}
