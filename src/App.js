import logo from "./logo192.png";
import "./App.css";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import ProfileHeader from "./component/ProfileHeader/ProfileHeader";
import Post from "./component/Post";
import SideBar from "./component/SideBar/SideBar";

export default function App() {
  return (
    <>
      <NavigationBar />
      <ProfileHeader logo={logo} name="React" handle="reactjs" />
      <section className="posts">
        <Post author="React" content="Happy 10th birthday to ReactJS! 🎉" />
      </section>
      <SideBar />
    </>
  );
}
