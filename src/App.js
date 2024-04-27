
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Index from './Pages/Index';
import Home from './Pages/Home';
import CreateProject from './Pages/CreateProject';
import CreateTodo from './Pages/CreateTodo';
import ListTodos from './Pages/ListTodos';
import ViewProject from './Pages/ViewProject';
import ProjectTitleEdit from './Pages/ProjectTitleEdit';
import EditTodo from './Pages/EditTodo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Index/>}/>
        <Route path='/regWire' element={<Register/>}/>
        <Route path='/MapLog' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create-project' element={<CreateProject/>}/>
        <Route path='/create-todo' element={<CreateTodo/>}/>
        <Route path='/todos' element={<ListTodos/>}/>
        <Route path='/logout' element={<Login/>}/>
        <Route path='/viewproject' element={<ViewProject/>}/>
        <Route path='/editpjttitle' element={<ProjectTitleEdit/>}/>
        <Route path='/edittodo' element={<EditTodo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
