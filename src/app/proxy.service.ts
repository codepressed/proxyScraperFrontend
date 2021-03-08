import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Proxy} from './proxy'
//import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

@Injectable({providedIn: 'root'})
export class ProxyService{
    private apiServerUrl = environment.apiHerokuUrl;
    //private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getProxies(): Observable<Proxy[]>{
        return this.http.get<Proxy[]>(`${this.apiServerUrl}/api/proxy/all`);
    }

}