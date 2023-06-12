import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on randering header...", () => {
  //Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  
  const logo=header.getAllByTestId("logo");


  expect(logo[0].src).toBe("http://localhost/dummy.js");
  //check if logo is loaded or not!


  
});


test("Online status should be black on on randering header...", () => {
  //Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  
  const onlineStatus=header.getByTestId("online-status");


  expect(onlineStatus.innerHTML).toBe("☑️");
  //check if logo is loaded or not!


  
});


test("cart should have zero items on randering header...", () => {
    //Load header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    
    const cart=header.getByTestId("cart");
  
  
    expect(cart.innerHTML).toBe("Cart-0 items");
    //check if logo is loaded or not!
  
  
    
  });