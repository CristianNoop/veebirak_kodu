import {mount} from '@vue/test-utils';

import Header from '../../src/components/Header';


describe('Header', () => {

    const wrapper = mount(Header);

    //Task 2 a)
    it('renders the correct date', () => {
        let today = new Date();

        let date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();

        expect(wrapper.html()).toContain(date);
    });

    //Task 2 b)
    it('renders the correct year', () => {
        let year = new Date().getFullYear();

        expect(wrapper.html()).toContain(year);
    });

    //Task 2 c)
    it('renders the correct month', () => {
        let monthNum = new Date().getMonth();
        let months = [
            'JAN',
            'FEB  ',
            'MAR',
            'APR',
            'MAY',
            'JUN',
            'JUL',
            'AUG',
            'SEPT',
            'OCT',
            'NOV',
            'DEC'
        ];

        expect(wrapper.html()).toContain(months[monthNum]);
    });

    //Task 2 c)
    it('renders the correct week day', () => {


        let weekdayNum = new Date().getDay()

        let weekdays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

        expect(wrapper.html()).toContain(weekdays[weekdayNum])

    })
});
