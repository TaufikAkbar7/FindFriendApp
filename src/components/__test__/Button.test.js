const { render, screen } = require("@testing-library/react");
import Button from '../Button';

describe('Test Button component', () => {
    it('should display button and display button name', () => {
        render(<Button name="find"/>)
    
        expect(screen.getByRole('button', { name: /find/i }))
    })
})

