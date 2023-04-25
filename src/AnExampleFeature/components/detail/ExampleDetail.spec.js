import { renderComponent } from '_shared/testUtils/renderComponent';
import { screen } from '@testing-library/react';
import ExampleDetail from './ExampleDetail';
import { waitFor } from '@testing-library/react';

/**
 * Typical API responses do not need to be mocked here, as the setupTests will integrate MSW, so those responses can be used in tests.
 * A useful article on msw and mocking endpoints can be found here https://kentcdodds.com/blog/stop-mocking-fetch.
 */

describe('ExampleDetail', () => {
  it('should display the example match details', async () => {
    /**
     * renderComponent is needed in order for Chakra to work correctly.
     * If you are rendering a component which uses some routing methods in it e.g. useNavigation,
     * then use renderComponentWithRoute
     **/
    renderComponent(<ExampleDetail />);

    /** It's better to test the output that the user will see, rather than the internal implementations of a component.
     * See https://testing-library.com/docs/react-testing-library/intro/ for more info on how to write tests with
     * react-testing-library
     **/

    /**
     * We need to use waitFor here to make sure the data has loaded from the API query we made, else we will get the
     * 'wrapped in act()' error. For components that don't call any APIs you don't need this
     **/
    await waitFor(async () => {
      expect(await screen.findByText('Log out')).toBeVisible();
    });
  });
});
