import { renderComponent } from '_shared/testUtils/renderComponent';
import { screen } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

describe('ExampleComponent', () => {
  it('should display the component', async () => {
    let props = {
      text: 'ExampleComponent'
    };
    renderComponent(<ExampleComponent {...props} />);
    expect(await screen.findByText('ExampleComponent')).toBeVisible();
  });
});
