import { Routes, mapToResolve } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';
import { roomGuard } from './guards/room.guard';
import { CommentsComponent } from './comments/comments.component';
import { CommentGuard } from './comments/guards/comment.guard';

export const routes: Routes = [
    {path: "", redirectTo: "/login", pathMatch: "full"},
    {path: "login", component:LoginComponent},    
    {path: "add", component:RoomsAddComponent,canActivate:[loginGuard]}, 
    {path: 'booking/:id', loadChildren: () => import('./booking/booking.module').then(m=>m.BookingModule)},
    {   
        path:"room", component:RoomsComponent, canActivate:[loginGuard], canActivateChild:[roomGuard],
        children: [
            {path: 'add', component: RoomsAddComponent, canActivate:[loginGuard]},
            {path: ':id', component: RoomsBookingComponent}
        ],
    },    
    {path: "room/add", component:RoomsAddComponent, pathMatch:'full', canActivate:[loginGuard]},
    {path: "employee", component:EmployeeComponent, canActivate:[loginGuard] },
    {path: "comment", loadChildren: () => import('./comments/comments.module').then(m=>m.CommentsModule), /*resolve: {comments: CommentGuard} */}, 
    
    {path: "**", component: NotFoundComponent}    
];