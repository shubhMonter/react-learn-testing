import App from "./App";
import Enzyme, { shallow } from "enzyme";
import enzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new enzymeAdapter() });
test("renders learn react link", () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
});
test("renders non-empty learn react ", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
