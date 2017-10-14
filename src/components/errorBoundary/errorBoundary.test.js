import React from 'react';
import {shallow} from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

const errorBoundary = (
    <ErrorBoundary>
        <div></div>
    </ErrorBoundary>
);

describe('ErrorBoundary', () => {
    it('should render', () => {
        const wrapper = shallow(errorBoundary);
        expect(wrapper.exists()).toBe(true);
    })
})