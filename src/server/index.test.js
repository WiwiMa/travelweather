import { processData } from './index';
import fetch from 'node-fetch';


test('', () => {
    

    global.search = jest.fn();
    global.darksky = jest.fn();

})

describe('', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    test('', () => {
        let req = {
            'body': {
                'location': 'Dublin',
                'date': '2020-02-01'
            }
        }

        global.search = jest.fn();
        global.darksky = jest.fn();

        fetch.mockResponseOnce(JSON.stringify({'img': 'www.url.com'}));

        processData(req).then(res => {
            expect(res.img).toEqual('www.url.com');
        })

    })
})