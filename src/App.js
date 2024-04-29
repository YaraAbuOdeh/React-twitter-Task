import logo from "./logo192.png";
import "./App.css";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import ProfileHeader from "./component/ProfileHeader/ProfileHeader";
import MiddlePanel from "./component/MiddlePanel/MiddlePanel";
import SideBar from "./component/SideBar/SideBar";

export default function App() {
  return (
    <>
      <NavigationBar />
      <ProfileHeader logo={logo} name="React" handle="reactjs" />
      <MiddlePanel />
      <SideBar />
    </>
  );
}
