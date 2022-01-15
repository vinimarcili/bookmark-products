import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'default-layout',
  templateUrl: './default.layout.html',
  styleUrls: ['./default.layout.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  searchText = ''
  ngOnInit(): void {}
}
