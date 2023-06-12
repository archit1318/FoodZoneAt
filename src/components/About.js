import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props){
    super(props);
    
    console.log("Parent - constructor");

  }
  componentDidMount(){
    //best place of apis calls
    console.log("Parent - compoented didmount");

  }
  render(){
    console.log("Parent- render");
      return (
        <div>
          <h1 className="p-3 m-3 text-2xl">About Us Page</h1>
          <p className="p-3 m-3 text-3xl">This is the Food Zone Application using React</p>
          {/* <Profile  name={"First Child"} xyz="abc"  /> */}
        </div>
      );
  }
};

export default About;
