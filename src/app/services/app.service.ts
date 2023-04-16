import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseState } from '../store/investment-list/investment-list.state';

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor(private http: HttpClient) { }

    fetch(): Observable<IResponseState> {
        return this.http.get<IResponseState>('https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653');
    }
}