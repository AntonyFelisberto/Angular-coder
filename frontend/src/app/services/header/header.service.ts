
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './../../models/header';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title:'Inicio',
    icon:'dashboard',
    routeUrl:''
  })

  constructor() { }

  get headerData():HeaderData{
    return this._headerData.value
  }

  set headerData(_headerData:HeaderData){
    this._headerData.next(_headerData)
  }

}
