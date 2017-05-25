import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class CategoryService{
    constructor(private http: Http){}
    getCategories()
    {
        return this.http.get('http://localhost:80/categories').map((response:Response)=>response.json())
    }
}