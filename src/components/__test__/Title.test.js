const { render, screen } = require("@testing-library/react");
import Title from '../Title';

it('should display title', () => {
    render(<Title name="FindFriend App"/>)

    expect(screen.getByRole('heading', { name: /findfriend app/i }))
})
