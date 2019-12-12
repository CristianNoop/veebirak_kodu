import { mount } from '@vue/test-utils'
import List from "../../src/components/List";
import Item from "../../src/models/Item";

describe('List component', () => {
    //Task 1
    it("test that if no list item is provided List component displays text.", () => {
        const wrapper = mount(List);
        expect(wrapper.vm.$props.list.length).toEqual(0); //confirm list size
        expect(wrapper.html()).toContain("Add your first Todo task") //check if correct text is displayed
    });
    it("test that if a list item is provided List component doesn't display text", () => {
        const wrapper = mount(List, {
            propsData: {
                list: [new Item('test', false)]
            }
        });
        expect(wrapper.vm.$props.list.length).toEqual(1); //confirm new list size
        expect(wrapper.html()).not.toContain("Add your first Todo task"); //check if text is gone
    })

    //Task 4
    it("test that if a item in the list is marked done item is updated correctly", () => {
        let item1 = new Item('test', false);
        let item2 = new Item('test2', false);
        const wrapper = mount(List, {
            propsData: {
                list: [item1, item2]
            }
        });
        expect(wrapper.vm.$props.list[0].done).toEqual(false); //confirm that item1 originally is false
        expect(wrapper.vm.$props.list[1].done).toEqual(false); //confirm that item2 originally is false
        wrapper.find('span:nth-of-type(1)').trigger('click'); //click the first one done
        expect(wrapper.vm.$props.list[0].done).toEqual(true); //now should be true
        expect(wrapper.vm.$props.list[1].done).toEqual(false); //now should be still false
    })
});