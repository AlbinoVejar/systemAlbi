import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon }  from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public ErrorAlert(title: string, text: string){
    Swal.fire({
      text: text,
      title: title,
      icon: "error",
      backdrop: true,
      position: "center"
    });
  }

  public ShowAlert(title: string, text: string, icon: SweetAlertIcon){
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      backdrop: true,
      position: "center",
    });
  }

  public ShowToastSuccess(title: string, text: string){
    Swal.fire({
      title: title,
      text: text,
      icon:'success',
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#66BB6A',
      iconColor: '#fff'
    });
  }

  public ConfirmAlert(title: string, text: string){
    return Swal.fire({
      title: title,
      text: text,
      icon: 'question',
      position: 'center',
      backdrop: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      confirmButtonText: "Sí. Confirmo",
      showCancelButton: true,
      cancelButtonText: "Cancelar"
    });
  }
}
