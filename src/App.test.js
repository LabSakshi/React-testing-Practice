import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('Confirm button is disabled when checkbox is checked', () => {

  render(<App />);

  //select the button and check your expectations initially from the button
  const button = screen.getByRole('button');
  expect(button).toBeEnabled()
  //select the checkbox and check your expectations initially from the checkbox
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  expect(checkbox).not.toBeChecked()

  //Click the checkbox

  //TEST FLOW disable button-->button is gray-->enable button-->button is gray
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({ backgroundColor: 'gray' })
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
})

// FUNCTIONAL TESTING: DESCRIBE TAKES IN TEST GLOBAL

describe('spaced before camel case capital letters', () => {
  test('Work for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });

  test('Works for multiple innrercapital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })


})