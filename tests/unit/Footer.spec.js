import { mount } from '@vue/test-utils';

import Footer from '../../src/components/Footer';

describe('Footer', () => {

    const wrapper = mount(Footer);

  it('Testing whether "open" property in Footer component changes to true when "+" is clicked', () => {

    
    // expect et state on true
    //klikime nupul
    // wrapper.trigger('click')
    //state false or vice versa
    wrapper.find('span').trigger('clock')
    expect(wrapper.vm.).toContain(date);
  });

  
});
