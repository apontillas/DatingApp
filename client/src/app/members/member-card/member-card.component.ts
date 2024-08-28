import { Component, computed, inject, input, Input, ViewEncapsulation } from '@angular/core';
import { Member } from '../../_models/member';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LikesService } from '../../_services/likes.service';
import { MembersService } from '../../_services/members.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent {
  @Input() member: Member | undefined;
  private likeService = inject(LikesService);

  constructor(private memberService: MembersService, private toastr: ToastrService) {}
  
  addLike(member: Member) {
    this.memberService.addLike(member.id).subscribe({
      next: () => this.toastr.success('You have liked ' + member.knownAs)
    })
  }
}
