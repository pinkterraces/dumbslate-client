import { createRoot } from 'react-dom/client';
import { MainView } from "./components/main-view/main-view";
//import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';

import Container from "react-bootstrap/Container";
import { BrowserRouter } from "react-router-dom";

const DumbslateApplication = () => {
  return (
    <Container fluid className='bg-secondary justify-content-md-center ps-5 pe-5 ' /*style={{border: "1px solid red"}}*/ >
      <BrowserRouter>
        <MainView />
      </BrowserRouter>
    </Container>
  )
};

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<DumbslateApplication />);