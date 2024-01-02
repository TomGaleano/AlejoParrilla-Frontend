import { createBoard } from '@wixc3/react-board';
import { Login } from '../../../components/login';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'Login',
    Board: () => (<MemoryRouter>
         <Login />,
    </MemoryRouter>)
});
