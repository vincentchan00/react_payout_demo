import {waitFor, fireEvent, render,screen} from '@testing-library/react';
import App from './App';

it('table checkbox should work', async() => {
    render(<App />);
    const checkboxes = screen.getAllByRole('checkbox');

    expect(checkboxes[1]).not.toBeChecked();
    console.log(checkboxes[1]);
    fireEvent.click(checkboxes[1]);

    const checked = await screen.findAllByRole('checkbox',{checked:true})
    expect(checked).toHaveLength(2); // table and popup checkbox will be included

    await waitFor(() =>  expect(checkboxes[1]).toBeChecked())
})
