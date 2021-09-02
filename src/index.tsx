import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app'
import { theme } from './constants'
import { CSSReset } from './styled/components'
import { queryClient } from './query-client'

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Router>
        <CSSReset />
        <App />
      </Router>
      <ReactQueryDevtools />
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById('root')
)
