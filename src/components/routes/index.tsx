import { Routes, Route } from 'react-router-dom'

import AllMatches from 'components/pages/AllMatches'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllMatches />} />
      <Route path="/my-matches" element={<h3>my matches</h3>} />
      <Route path="/users" element={<h3>users</h3>} />
      <Route path="/profile" element={<h3>profile</h3>} />
      <Route path="*" element={<h3>404</h3>} />
    </Routes>
  )
}

export default AppRoutes
