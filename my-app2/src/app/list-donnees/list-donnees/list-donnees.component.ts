import { Component, OnInit } from '@angular/core';
import { ApiRatpService } from '../../core/services/api-ratp.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-donnees',
  templateUrl: './list-donnees.component.html',
  styleUrls: ['./list-donnees.component.css']
})
export class ListDonneesComponent implements OnInit {
 public collection1: Observable<any[]>;

  constructor(private apiRatpService: ApiRatpService ) { }

  ngOnInit() {
    this.collection1 = this.apiRatpService.collection_1;
    console.log(this.collection1);
  }


  public onAfficher(): void {

    // tslint:disable-next-line:no-unused-expression
    this.collection1 = this.apiRatpService.collection_1;
    }

  }


