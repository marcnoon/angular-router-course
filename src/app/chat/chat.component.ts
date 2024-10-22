import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  closeChat(evt: Event) {
    console.log("close chat");
    this.router.navigate([{ outlets: { chat: null } }]);
  }

}
