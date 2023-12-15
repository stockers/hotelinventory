import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentsService } from '../comments.service';
import { Comment } from '../comment';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class CommentGuard implements Resolve<Comment[]> {
  constructor(private commentsService: CommentsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]>{
    return this.commentsService.getComments();
  }
}
