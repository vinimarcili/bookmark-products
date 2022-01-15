import { FormsModule } from '@angular/forms'
import { render, screen } from '@testing-library/angular'
import { InputComponent } from './input.component'
import userEvent from '@testing-library/user-event'
import { ComponentFixture, TestBed } from '@angular/core/testing'

const getInput = () => screen.getByTestId('input') as HTMLInputElement
const getLeftIcon = () => screen.getByTestId('left-icon') as HTMLElement
const getRightIcon = () => screen.getByTestId('right-icon') as HTMLElement

describe('InputComponent', () => {
  let component: InputComponent
  let fixture: ComponentFixture<InputComponent>
  it('Input be disabled when recieve disabled prop', async () => {
    await render(InputComponent, { imports: [FormsModule], componentProperties: { disabled: true } })
    expect(getInput().disabled).toBe(true)
  })

  it('Input be readOnly when recieve readonly prop', async () => {
    await render(InputComponent, { imports: [FormsModule], componentProperties: { readonly: true } })
    expect(getInput().readOnly).toBe(true)
  })

  it('Input be show user text when user types a text', async () => {
    await render(InputComponent, { imports: [FormsModule] })
    expect(getInput().value).toBe('')
    userEvent.type(getInput(), 'some text')
    expect(getInput().value).toBe('some text')
  })

  it('Input be show text with a entry value', async () => {
    await render(InputComponent, { imports: [FormsModule], componentProperties: { value: 'some text' } })
    expect(getInput().value).toBe('some text')
  })

  it('Input should be render a left icon', async () => {
    await render(InputComponent, { imports: [FormsModule], componentProperties: { leftIcon: '<i class="fas fa-question"></i>' } })
    expect(getLeftIcon().innerHTML).toBe('<i class="fas fa-question"></i>')
  })

  it('Input should be render a right icon', async () => {
    await render(InputComponent, { imports: [FormsModule], componentProperties: { rightIcon: '<i class="fas fa-question"></i>' } })
    expect(getRightIcon().innerHTML).toBe('<i class="fas fa-question"></i>')
  })
})
