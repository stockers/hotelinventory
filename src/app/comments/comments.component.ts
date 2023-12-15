import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, pluck } from 'rxjs';
import { Comment } from './comment';

@Component({
  selector: 'hinv-comments',
  standalone: false,
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  constructor (private commentsService : CommentsService, private activatedRoute:ActivatedRoute) {}
  showLoading : Boolean = true;
  displayedColumns: string[] = ['postId', 'id', 'name', 'body'];
  //comments$ = this.activatedRoute.data.pipe(map(data=>{this.showLoading=false;return data['comments'];})); //pipe(pluck('comments'))); // pluck depricated
  comments$! : Observable<Comment[]>;
  comments! : Comment[];
  ngOnInit() :void {
    //this.activatedRoute.data.subscribe((data)=> {this.comments = data['comments']})
    
    this.commentsService.getComments().subscribe( {next: (data) => this.comments=data, complete: () => this.showLoading=false});        
  }
}
