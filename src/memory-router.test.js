import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import createMemoryHistory from 'history/createMemoryHistory';

import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from './App';


Enzyme.configure({ adapter: new Adapter() });

jest.mock('./MyHttpService', () => {
  return function() {
    return { getUser: () => Promise.resolve({ user: null }) };
  };
});

describe('MemoryRouter test when user is null', () => {
  let wrapper;
  let instance;
  beforeEach(() => {    
    wrapper = renderer.create(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );
    instance = wrapper.getInstance();
  });

  it('history length should be 2', done => {
    expect(instance.history.length).to.equal(2);
    done();
  });

  it('history location should be \login', done => {
    expect(instance.history.location.pathname).to.equal('/login');
    done();
  });
});