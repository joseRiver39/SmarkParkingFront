import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroTO } from 'src/app/interfaces/registroto.interface';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url:string = "https://backsmartparking.herokuapp.com/api/registro";

  constructor(private _http: HttpClient) { }

  listarRegistro(): Observable<RegistroTO[]> {
    return this._http.get<RegistroTO[]>(this.url);
  }

  guardar(registro: RegistroTO) : Observable<RegistroTO> {
    return this._http.post<RegistroTO>(this.url, registro);
  }

  actualizar(registro: RegistroTO) : Observable<RegistroTO> {
    return this._http.put<RegistroTO>(this.url, registro);
  }

  eliminar(id: string) : Observable<string> {
    return this._http.delete<string>(this.url + "/" + id);
  }

}
