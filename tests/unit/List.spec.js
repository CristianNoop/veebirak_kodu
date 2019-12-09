import { mount } from '@vue/test-utils'
import List from "../../src/components/List";
import Item from "../../src/models/Item";

describe('List component', () => {

    test("test that if no list item is provided List component displays text.", () => {
        const wrapper = mount(List);
        if (wrapper.vm.$props.list.length > 0) {
            expect(wrapper.html()).toContain("Add your first Todo task")
        }
    });
    test("test that if a list item is provided List component doesn't display text", () => {
        const wrapper = mount(List, {
            propsData: {
                list: [new Item('test', false)]
            }
        });
        expect(wrapper.vm.$props.list.length).toBeGreaterThan(0);
        expect(wrapper.html()).not.toContain("Add your first Todo task");
    })

});