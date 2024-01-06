import { createBoard } from '@wixc3/react-board';
import Test from '../../../components/test';

export default createBoard({
    name: 'Test',
    Board: () => <Test />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1256,
        canvasHeight: 2129
    }
});
