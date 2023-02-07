import { Component, OnInit } from '@angular/core';
import { PostsService } from '../entities/posts.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	posts : any = [];
	error : string = "";
	constructor(public postsService : PostsService) {}
	ngOnInit(): void {
		this.initPosts();
	}
	initPosts(): void {
		var result = this.postsService.findAll();
		const onSuccess = (response : any) => {
			this.posts = response;
		};
		const onFail = () => {
			this.error = 'Oops! Une erreur au niveau du serveur...';
		};
		result.subscribe(onSuccess, onFail);
	}
}
