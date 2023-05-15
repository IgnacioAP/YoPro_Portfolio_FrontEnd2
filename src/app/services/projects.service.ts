import { Injectable } from '@angular/core';
import { Observable, catchError, of} from 'rxjs';
import { Projects } from '../Projects'
import {HttpClient, HttpHandler} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private url:string = "assets/data/projects.json";


  constructor(private http:HttpClient) { }

  getProjects(): Observable<Projects[]>{
    return this.http.get<Projects[]>(this.url).pipe(
      catchError(error => {
        console.error(error);
        return of([]);
      }));
  }
}