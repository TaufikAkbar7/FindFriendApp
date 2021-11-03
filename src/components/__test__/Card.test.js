const { render, screen } = require("@testing-library/react");
import Card from '../Card';

const dummy = {
    picture: {
        large: 'https://randomuser.me/api/portraits/men/21.jpg'
    },
    name: {
        first: 'john',
        last: 'doe'
    },
    phone: 2221,
    location: {
        country: 'England'
    }
}

describe('Test Component Card', () => {
    it('should display card when client hit endpoint API', () => {
        render(<Card data={dummy}/>)
    
        // check aria-label img
        expect(screen.getByRole('img', { name: 'person image' }));
    
        // check name
        expect(screen.getByRole('heading', { name: /john doe/i}));
    
        // check phone
        expect(screen.getByText(/2221/i));
    
        // check country
        expect(screen.getByText(/England/i));
    })
})

