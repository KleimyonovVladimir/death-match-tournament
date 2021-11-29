import { Routes, Route } from 'react-router-dom';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<h3>Logo</h3>} />
      <Route path="/all-matches" element={<h3>all matches</h3>} />
      <Route path="/my-matches" element={<h3>my matches</h3>} />
      <Route path="/users" element={<h3>users</h3>} />
      <Route path="/profile" element={<h3>profile</h3>} />
      <Route path="*" element={<h3>404</h3>} />
    </Routes>
  );
};
