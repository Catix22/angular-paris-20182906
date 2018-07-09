import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class ApiRatpService {
  // tslint:disable-next-line:semicolon
  private _collection: Observable<any[]>;


  // tslint:disable-next-line:max-line-length

  // tslint:disable-next-line:max-line-length
  private url = 'https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&sort=code_postal&facet=tco_libelle&facet=code_postal';

  constructor( private http: HttpClient) {
  this._collection = this.http.get<any[]>(this.url);
}

public get collection_1(): Observable<any[]> {
  return this._collection;
}
public set collection_1(value: Observable<any[]>) {
  this._collection = value;
}



}
