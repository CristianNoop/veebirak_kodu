import { mount } from '@vue/test-utils';

import Footer from '../../src/components/Footer';

describe('Footer', () => {

    const wrapper = mount(Footer);

  it('Testing whether "open" property in Footer component changes to true when "+" is clicked', () => {

    
    // votame muutuja open endise state'i
    let openValue = wrapper.vm.$data.open;
    //klikime nupul
    wrapper.find('span').trigger('click');
    //vaatame et muutuja open state muutus
    expect(wrapper.vm.$data.open).toEqual(!openValue);
  });

  
});
