// import original module declarations
import '@xstyled/styled-components'
import defaultTheme from './themes/default'

// and extend them!
declare module '@xstyled/styled-components' {
  export type DefaultTheme = typeof defaultTheme
}
