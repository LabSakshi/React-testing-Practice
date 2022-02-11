import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('to check if there is a component with button role', () => {
  //select the component that needs to be tested
  render(<App />);

  //get the element out of the component
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  //write out what you expect from that test i.e. we expect the button to have bgc of red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  //click button fireEvent will click the button
  fireEvent.click(colorButton);

  //After click expect the button to have background color to blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  //expect the button text  to be 'changes to red'
  expect(colorButton.textContent).toBe('Change to red')
})


test('initial conditions', () => {
  render(<App />);

  //check that the button starts out enabled

  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
})

// test('button has correct initial text', () => {

// });

// test('button turns blue when clicked', () => {

// })

