import Header from 'components/blocks/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from 'components/routes';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content />
      </Router>
    </div>
  );
};

export default App;
