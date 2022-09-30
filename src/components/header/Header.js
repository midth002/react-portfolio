import "./header.scss";

const Header = () => {
  return (
    <div class="jumbotron d-flex mx-auto" id="header">
      <div class="title">
        <p>Hello, my name is</p>
        <h2 id="name">Andrew Midthun.</h2>
        <h2 className="details-me">I'm a full stack developer.</h2>
      </div>
    </div>
  );
};

export default Header;
