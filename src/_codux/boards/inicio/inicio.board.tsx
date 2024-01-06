import { createBoard } from '@wixc3/react-board';
import { Inicio } from '../../../components/inicio';

export default createBoard({
    name: 'Inicio',
    Board: () => <Inicio />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1457,
        windowHeight: 851,
        canvasHeight: 976
    }
});
