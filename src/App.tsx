import { BrowserRouter as Router } from 'react-router-dom'

import ContentWrapper from 'components/blocks/ContentWrapper'
import Header from 'components/blocks/Header'
import AppRoutes from 'components/routes'

const App = () => {
  return (
    <Router>
      <Header />
      <ContentWrapper>
        <AppRoutes />
      </ContentWrapper>
    </Router>
  )
}

export default App
