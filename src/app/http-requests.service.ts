import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from './_files/config.json';

@Injectable({
	providedIn: 'root'
})
export class HttpRequestsService {
	constructor(private http: HttpClient) { }
	get(url : string, options : any = {}, body : any = {}) {
		console.log(config.api.api_baseUrl);
		return this.http.get((config.api.api_baseUrl + url), {});
	}
}
