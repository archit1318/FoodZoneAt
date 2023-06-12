import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
      },
    };
    console.log("Child -Constructor " + this.props.name);
  }
  async componentDidMount() {
    //best place of apis calls
    const data = await fetch("https://api.github.com/users/archit1318");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("child - compoented didmount" + this.props.name);
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <>
        <h1 className="p-3 m-3">Profile class components</h1>
        <img src={this.state?.userInfo?.avatar_url} alt="" />
      </>
    );
  }
}

export default Profile;
