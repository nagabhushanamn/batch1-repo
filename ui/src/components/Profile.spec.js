import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from './Profile'

Enzyme.configure({ adapter: new Adapter() });



describe('Profile component tests', () => {
    it("should render user's name as title", () => {
        let user = {
            name: 'Nag',
            email: 'nag@example.com',
            mobile: 1234567890
        }
        const wrapper = shallow(<Profile user={user} />)
        const title = wrapper.find('.title').get(0).text()
        expect(title).toBe(user.name)
    })

})