import { render } from '@testing-library/react'
import { ThemeProvider } from '@xstyled/styled-components'
import defaultTheme from '../themes/default'

const Providers = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
