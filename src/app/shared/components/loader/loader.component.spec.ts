import { render, screen } from '@testing-library/angular'
import { LoaderComponent } from './loader.component'

const getLoader = () => screen.getByTestId('loader') as HTMLElement

describe('LoaderComponent', () => {
  it('loader should be render on dom load', async () => {
    await render(LoaderComponent)
    expect(getLoader().innerHTML).toContain('Loading...')
  })
})
