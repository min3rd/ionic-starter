import { Conversation } from 'src/app/modules/apps/chat/chat';
import { _generate, generate } from './functions';

describe('generate', () => {
    it('should return a object', () => {
        const result = _generate("go", "start");
        expect(typeof result == 'object').toBeTruthy();
    });

    it('should return a Conversation object', () => {
        const result = generate(new Converstion());
        expect(typeof result == 'object').toBeTruthy();
    });
});