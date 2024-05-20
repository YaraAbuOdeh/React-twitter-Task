export default function NavigationBar() {
    return (
      <nav className="navigation">
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Notifications</li>
          <li>Messages</li>
          <li>lists</li>
          <li>Bookmarks</li>
          <li>Communities</li>
          <li>Profile</li>
          <li>More</li>
        </ul>
        
      <button className="post-button">Post</button>
      <div className="sidebar_profile flex">
          <span className="nav_image">
            <img src="images/profile.jpg" alt="logo_img" />
          </span>
          <div className="data_text">
            <span className="name">yara abu odeh</span>
            <span className="email">yaraabuodeh@gmail.com</span>
          </div>
        </div>
      </nav>
    );
  }