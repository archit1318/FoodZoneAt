import React, { useState } from "react";

const Section = ({ title, description,isVisible,setIsVisible }) => {
//   const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="p-2 m-2 border border-black">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
    const[visibleSection,setVisibleSection]=useState("careers");

  return (
    <div>
        <h1 className="text-3xl p-2 m-2 font-bold"> Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          ", nodit, vitae, saepe in rem. Laudantium, itaque reiciendis assumenda reprehenderit perspiciatis facere facilis! Incidunt, officia suscipit, explicabo dolorum modi sit blanditiis praesentium architecto, aliquid quasi ipsa. Laudantium, nisi possimus ipsum illo unde porro exercitationem sequi incidunt est iste aspernatur odio temporibus ipsam praesentium perspiciatis mollitia corporis nesciunt magnam quasi odit ducimus, provident tenetur iusto? Architecto voluptates velit quidem, exercitationem, vel repellendus eum quos cum quasi officiis animi voluptatibus nostrum aut hic ullam rerum adipisci itaque delectus quas autem iusto maxime mollitia fuga magni! Nemo fuga architecto itaque in quam aliquid sed, recusandae rerum, minus sapiente dolorum ad molestiae reiciendis totam."
        }
        isVisible={visibleSection==='about'}
        setIsVisible={()=>setVisibleSection("about")}
      />

      <Section
        title={"Team Instamart"}
        description={
          "Lorem unde eveniet, esse, voluptatem libero id obcaecati corporis. Dicta accusantium inventore reiciendis vero ratione provident quae aperiam pariatur fugit recusandae eligendi cupiditate nihil tempora reprehenderit iste eius aut ipsum odit, vitae, saepe in rem. Laudantium, itaque reiciendis assumenda reprehenderit perspiciatis facere facilis! Incidunt, officia suscipit, explicabo dolorum modi sit blanditiis praesentium architecto, aliquid quasi ipsa. Laudantium, nisi possimus ipsum illo unde porro exercitationem sequi incidunt est iste aspernatur odio temporibus ipsam praesentium perspiciatis mollitia corporis nesciunt magnam quasi odit ducimus, provident tenetur iusto? Architecto voluptates velit quidem, exercitationem, vel repellendus eum quos cum quasi officiis animi voluptatibus nostrum aut hic ullam rerum adipisci itaque delectus quas autem iusto maxime mollitia fuga magni! Nemo fuga architecto itaque in quam aliquid sed, recusandae rerum, minus sapiente dolorum ad molestiae reiciendis totam."
        }
        isVisible={visibleSection==='team'}
        setIsVisible={()=>setVisibleSection("team")}
      />
      <Section
        title={"Careers Instamart"}
        description={
          "Lorem unde eveniet, esse, voluptatem libero id obcaecati corporis. Dicta accusantium inventore reiciendis vero ratione provident quae aperiam pariatur fugit recusandae eligendi cupiditate nihil tempora reprehenderit iste eius aut ipsum odit, vitae, saepe in rem. Laudantium, itaque reiciendis assumenda reprehenderit perspiciatis facere facilis! Incidunt, officia suscipit, explicabo dolorum modi sit blanditiis praesentium architecto, aliquid quasi ipsa. Laudantium, nisi possimus ipsum illo unde porro exercitationem sequi incidunt est iste aspernatur odio temporibus ipsam praesentium perspiciatis mollitia corporis nesciunt magnam quasi odit ducimus, provident tenetur iusto? Architecto voluptates velit quidem, exercitationem, vel repellendus eum quos cum quasi officiis animi voluptatibus nostrum aut hic ullam rerum adipisci itaque delectus quas autem iusto maxime mollitia fuga magni! Nemo fuga architecto itaque in quam aliquid sed, recusandae rerum, minus sapiente dolorum ad molestiae reiciendis totam."
        }
        isVisible={visibleSection==='careers'}
        setIsVisible={()=>setVisibleSection("careers")}
      />
    </div>
  );
};

export default Instamart;
