import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomService {
  public readonly apiUrl = environment.apiUrl;
  constructor() { }

}
