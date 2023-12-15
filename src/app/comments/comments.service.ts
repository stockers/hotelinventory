import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get<Comment[]>('/comments');
  }
}
