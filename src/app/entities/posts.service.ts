import { Injectable } from '@angular/core';
import { HttpRequestsService } from '../http-requests.service';

@Injectable({
	providedIn: 'root'
})
export class PostsService {
	constructor(public httpRequests: HttpRequestsService) { }
	findAll() {
		return this.httpRequests.get("posts");
	}
}
