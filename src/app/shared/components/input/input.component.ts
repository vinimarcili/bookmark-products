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
  @Input() hasTimeout = false

  @Output() valueChange: EventEmitter<any> = new EventEmitter()
  @Output() sharedWhenChange: EventEmitter<any> = new EventEmitter()
  @Output() sharedKeyPress: EventEmitter<any> = new EventEmitter()
  @Output() clickLeftIcon: EventEmitter<any> = new EventEmitter()
  @Output() clickRightIcon: EventEmitter<any> = new EventEmitter()

  timeStamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  timeoutInput: any
  TIMEOUT_INPUT = 800

  change(event: any): void {
    if (this.type === 'number') {
      event = parseFloat(event)
    }
    if (this.hasTimeout) {
      this.value = event
      this.timeoutInput = clearTimeout(this.timeoutInput)
      this.timeoutInput = setTimeout(() => {
        this.valueChange.emit(event)
        this.sharedWhenChange.emit()
      }, this.TIMEOUT_INPUT)
    } else {
      this.value = event
      this.valueChange.emit(event)
      this.sharedWhenChange.emit()
    }
  }
}
