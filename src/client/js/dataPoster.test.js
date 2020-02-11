import { postTravelData } from './dataPoster.js'

describe('Testing postTravelData', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    test('Testing if mock function works', () => {
        fetch.mockResponseOnce(JSON.stringify({'location': 'London', 'date': '2020-01-01', 'forecast': 'Sunny', 'img': 'www.url.com'}))
    
        const mockData = {'location': 'London', 'date': '2020-01-01'};

        postTravelData('/travelData', mockData).then(res => {
            expect(res.forecast).toEqual('Sunny');
        })
    })
})