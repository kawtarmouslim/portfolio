import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface Projet {
  titre: string;
  description: string;
  technologies: string[];
  lien: string;
  image: string;

}
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  projets: Projet[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Projet[]>('assets/projets.json').subscribe(data => {
      this.projets = data;
    });
   
  }
  
}
