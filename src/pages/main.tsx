import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import NotFound from './notFound';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/createTask" element={createTask} /> */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
