import React from 'react';
import {shallow} from 'enzyme';
import {AppShell} from 'components/appShell/AppShell';

const appShell = (
    <AppShell>
    </AppShell>
);

describe('AppShell', () => {
    it('should render', () => {
        const wrapper = shallow(appShell);
        expect(wrapper.exists()).toBe(true);
    })
});