import { Component, OnInit } from '@angular/core';
import { RegistroService } from './service/registro.service';
import { RegistroTO } from '../../interfaces/registroto.interface';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private _registroService: RegistroService) { }

  listaRegistro : RegistroTO[] = new Array<RegistroTO>();
  registro : RegistroTO = new RegistroTO();

  ngOnInit(): void {
    this.listarRegistro();
  }

  listarRegistro(){
    this._registroService.listarRegistro().subscribe(
      data => {
        this.listaRegistro = data;
      }
    );
  }

  Guardar(){

    if (this.registro._id == "") {
      this.asignarFecha();  
      this._registroService.guardar(this.registro).subscribe(
        data => {
          this.listarRegistro();
          this.LimpiarFormulario();
        }
      )
    } else {
      this.asignarFecha();
      this.Actualizar();
    }

  }

  Actualizar(){

    this._registroService.actualizar(this.registro).subscribe(
      data => {
        this.listarRegistro();
        this.LimpiarFormulario();
      }
    )

  }

  VerRegitro(pRegistro: RegistroTO){
    this.registro = pRegistro
  }

  Eliminar(id: string){
    this._registroService.eliminar(id).subscribe(
      data => {
        this.listarRegistro();
        this.LimpiarFormulario();
      }
    )
  }



  LimpiarFormulario(){
    this.registro = new RegistroTO();
  }
  asignarFecha(){
    var fecha = new Date();
    var dia = fecha.getUTCDate();
    var mes = fecha.getUTCMonth();
    var anio = fecha.getUTCFullYear();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    if(this.registro.hora_ingreso == " "){
      this.registro.hora_ingreso = anio+"/"+mes+"/"+dia+" "+hora +":"+minutos;
    }else{
      this.registro.hora_salida = anio+"/"+mes+"/"+dia+" "+hora +":"+minutos;
    }
  }
}
