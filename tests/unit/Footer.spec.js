import {mount} from '@vue/test-utils';

import Footer from '../../src/components/Footer';

describe('Footer', () => {
    const wrapper = mount(Footer);
    //Task 3
    it('Testing whether "open" property in Footer component changes to true when "+" is clicked', () => {
        expect(wrapper.vm.$data.open).toEqual(false); //confirm that originally is false
        wrapper.find('span').trigger('click'); //click the button
        expect(wrapper.vm.$data.open).toEqual(true); //now should be true
    });
});
