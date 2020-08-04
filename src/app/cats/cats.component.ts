import { ModalDialogComponent } from './../modal-dialog/modal-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  private readonly apiURL = 'https://api.thecatapi.com/v1/images/search';
  private readonly apiURLFav = 'https://api.thecatapi.com/v1/favourites';
  catsImages: { id: string; url: string }[];
  catsImageId: string[];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  // openDialog() {

  // }

  observable(cats) {
    this.catsImages = cats.map((cat) => ({
      url: cat.url,
      id: cat.id,
    }));
    console.log(this.catsImages);
  }

  // Escolha seu gato favorito.

  showId(i) {
    console.log(this.catsImages[i].id);
    const opts = {
      headers: new HttpHeaders({
        'x-api-key': '0e1a4350-4ac4-47b0-bec2-cb58e9431989',
      }),
    };
    this.http
      .post(this.apiURLFav, { image_id: `this.catsImageId[i].id` }, opts)
      .subscribe((dados) => {
        console.log(dados), this.dialog.open(ModalDialogComponent);
      });
  }

  ngOnInit(): void {
    this.http
      .get(this.apiURL, { params: { limit: '8', size: 'small' } })
      .subscribe((test) => {
        this.observable(test);
      });
  }
}
