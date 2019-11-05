import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

const mountWithProvider = (component, mocks) =>
  mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      {component}
    </MockedProvider>
  );

const updateWrapper = async (wrapper, time = 0) => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, time));
    await wrapper.update();
  });
};

export {
  mountWithProvider,
  updateWrapper,
};
