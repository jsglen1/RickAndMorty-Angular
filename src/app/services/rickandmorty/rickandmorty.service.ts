import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../utils/global';

@Injectable({
  providedIn: 'root',
})
export class RickandmortyService {
  constructor(private http: HttpClient) {}

  getListCharacters(page: number) {
    return this.http
      .get<any>(BASE_URL + `/character/?page=${page}`)
      .pipe((res) => res);
  }
}
