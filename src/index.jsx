import { createRoot } from 'react-dom/client';
import './index.scss';

const DumbslateApplication = () => {
  return (
    <div className='dumbslate'>
      <div>Good morning</div>
    </div>
  );
};

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<DumbslateApplication />);