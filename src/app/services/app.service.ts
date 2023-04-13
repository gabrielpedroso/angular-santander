import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseStateInterface } from '../store/app.state';

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor(private http: HttpClient) { }

    fetch(): Observable<ResponseStateInterface> {
        return this.http.get<ResponseStateInterface>('https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653');
    }
}