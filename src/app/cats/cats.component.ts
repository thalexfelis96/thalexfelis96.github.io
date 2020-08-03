import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  private readonly apiURL = 'https://api.thecatapi.com/v1/images/search';
  catsImages: { id: string; url: string }[];
  catsImageId: string[];

  constructor(private http: HttpClient) {}

  observable(cats) {
    this.catsImages = cats.map((cat) => ({
      url: cat.url,
      id: cat.id,
    }));
    console.log(this.catsImages);
  }
  // getId(id) {
  //   this.catsImageId = id.map((catid) => catid.id);
  // }
  showId(i) {
    console.log(this.catsImages[i].id);
  }

  ngOnInit(): void {
    this.http
      .get(this.apiURL, { params: { limit: '8', size: 'small' } })
      .subscribe((test) => {
        this.observable(test);
      });
  }
}
