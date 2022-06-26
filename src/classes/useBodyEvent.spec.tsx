import React from 'react';
import useBodyEvent from './useBodyEvent.hook';
import { render, fireEvent, screen } from '@testing-library/react';

function TestClickComponent(): React.ReactElement {
  const [bodyClick, setBodyClick] = React.useState(0);
  useBodyEvent('click', e => {
    setBodyClick(bodyClick + 1);
  }, [bodyClick]);
  return <div>
    <strong>Body click count:</strong>
    {bodyClick}
  </div>;
}

function TestKeyboardComponent(): React.ReactElement {
  const [lastKeyboard, setKey] = React.useState('');

  useBodyEvent('keypress', e => {
    setKey(e.key);
  }, [setKey]);

  return (
    <div>
      Last key: {lastKeyboard}
    </div>
  );
}

test('Click Events Fire', () => {

  const { container } = render(<TestClickComponent />);
  fireEvent.click(document.body);
  expect(container.textContent).toBe('Body click count:1');
  fireEvent.click(document.body);
  expect(container.textContent).toBe('Body click count:2');
});

test('Keyboard Events Fire', () => {
  render(<TestKeyboardComponent />);

  fireEvent.keyPress(document.body, {
    key: 'f'
  });

  screen.getByText('Last key: f');

  fireEvent.keyPress(document.body, {
    key: 'l'
  });

  screen.getByText('Last key: l');

});
