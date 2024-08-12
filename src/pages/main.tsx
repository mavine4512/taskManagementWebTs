import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateTask from './createTask';
import EditTask from './editTask';
import Home from './home';
import NotFound from './notFound';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/createTask" element={<CreateTask/>} />
         <Route path="/editTask/:id" element={<EditTask/>} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
