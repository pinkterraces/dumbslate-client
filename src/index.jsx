import { createRoot } from 'react-dom/client';
import MainView  from "../components/main-view/main-view"

import './index.scss';

const DumbslateApplication = () => {
  return <MainView />
};

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<DumbslateApplication />);