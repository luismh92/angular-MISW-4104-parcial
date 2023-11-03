import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cafe } from '../cafe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeListService {

  private apiUrl: string = environment.baseUrl + '/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json';

  constructor(private http: HttpClient) { }

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }

}
