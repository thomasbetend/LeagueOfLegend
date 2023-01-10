import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setlocalStorage(team: any) {
    localStorage.setItem(`errorSelect${team}`, JSON.stringify(false));
    localStorage.setItem(`is${team}Touched`, JSON.stringify(false));
    localStorage.setItem(`${team}`, JSON.stringify(team));
    localStorage.setItem(`${team}`, JSON.stringify(team));
  }

  getlocalStorage(team: any) {
    JSON.parse(localStorage.getItem(`${team}`)!);
    JSON.parse(localStorage.getItem(`${team}`)!);
  }
}
