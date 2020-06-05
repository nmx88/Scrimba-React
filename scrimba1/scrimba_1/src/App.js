import React from "react";
import TodoItem from "./TodoItem.js";
import ContactCard from "./ContactCard";
import MultiPlayer from "./MultiPlayer";

function App() {
  let styles = {
    textAlign: "center",
    backgroundColor: "#344554",
    color: "#D43494",
  };

  return (
    <div className="master-div">
      <div className="todo-list" style={styles}>
        <h1>To do list...</h1>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      <div className="contacts">
        <ContactCard
          contact={{
            name: "Mr. Whiskerson",
            imgUrl: "http://placekitten.com/300/200",
            phone: "(212) 555-1234",
            email: "mr.whiskaz@catnap.meow",
            address: "Anaxagora 1, Athens, Greece",
            theme: ""
          }}
        />
        <ContactCard
          contact={{
            name: "Fluffykins",
            imgUrl: "http://placekitten.com/400/200",
            phone: "(212) 555-2345",
            email: "fluff@me.com",
            address: "Pythagora 34, Athens, Greece"
          }}
        />
        <ContactCard
          contact={{
            name: "Destroyer",
            imgUrl: "http://placekitten.com/400/300",
            phone: "(212) 555-3456",
            email: "ofworlds@yahoo.com",
            address: "Protagora 66-68, Chalkida, Greece"
          }}
        />
        <ContactCard
          contact={{
            name: "Felix",
            imgUrl: "http://placekitten.com/200/100",
            phone: "(212) 555-4567",
            email: "thecat@hotmail.com",
            address: "Ngyat 55, Berlin, Germany"
          }}
        />
      </div>
      <div className="music">
      <MultiPlayer
        urls={[
          "https://www.mboxdrive.com/tomatoma.mp3",
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        ]}
      />
      </div>
    </div>
  );
}

export default App;
