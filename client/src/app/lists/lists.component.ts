import { Component, inject, OnInit } from '@angular/core';
import { Member } from '../_models/member';
import { MembersService } from '../_services/members.service';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from "../members/member-card/member-card.component";
import { FormsModule, NgForm } from '@angular/forms';
import { LikesService } from '../_services/likes.service';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { Pagination } from '../_models/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule, MemberCardComponent, FormsModule, ButtonsModule, PaginationModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit {
  private membersService = inject(MembersService);
  members: Member[] | undefined = [];
  predicate = 'liked'
  pageNumber = 1;
  pageSize = 5;
  pagination: Pagination | undefined;
  
  ngOnInit(): void {
    this.loadLikes();
  }

  loadLikes() {
    this.membersService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe({
      next: response => {
        this.members = response.result;
        this.pagination = response.pagination;
      }
    })
  }

  pageChanged(event: any) {
    if (this.pageNumber !== event.page) {
      this.pageNumber = event.page;
      this.loadLikes();
    }
  }

}
