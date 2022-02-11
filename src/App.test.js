import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Confirm button is disabled when checkbox is checked', () => {

  render(<App />);

  //select the button and check your expectations initially from the button
  const button = screen.getByRole('button');
  expect(button).toBeEnabled()
  //select the checkbox and check your expectations initially from the checkbox
  const checkbox = screen.getByRole('checkbox',{name:'Disable button'})
  expect(checkbox).not.toBeChecked()

//Click the checkbox

//TEST FLOW disable button-->button is gray-->enable button-->button is gray
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({backgroundColor:'gray'})
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({backgroundColor:'red'})
})