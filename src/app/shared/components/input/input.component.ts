import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputSquidComponent {
  @Input() nameAttr?: string
  @Input() idAttr?: string
  @Input() value?: any
  @Input() type = 'text'
  @Input() placeholder?: string
  @Input() leftIcon = ''
  @Input() readonly = false
  @Input() disabled = false
  @Input() rightIcon = ''

  @Output() valueChange: EventEmitter<any> = new EventEmitter()
  @Output() sharedKeyPress: EventEmitter<any> = new EventEmitter()
  @Output() clickLeftIcon: EventEmitter<any> = new EventEmitter()
  @Output() clickRightIcon: EventEmitter<any> = new EventEmitter()

  timeStamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
}
