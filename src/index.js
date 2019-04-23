import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import faker from "faker";
import * as serviceWorker from "./serviceWorker";

const App = () => {
  return (
    <div className="ui container comments">
      <Comment
        author={faker.name.firstName()}
        avatar={faker.image.avatar()}
        content={faker.random.words()}
        date={`${faker.date
          .past()
          .getHours()}:${faker.date.past().getMinutes()}`}
      />
      <Comment
        author={faker.name.firstName()}
        avatar={faker.image.avatar()}
        content={faker.random.words()}
        date={`${faker.date
          .past()
          .getHours()}:${faker.date.past().getMinutes()}`}
      />
      <Comment
        author={faker.name.firstName()}
        avatar={faker.image.avatar()}
        content={faker.random.words()}
        date={`${faker.date
          .past()
          .getHours()}:${faker.date.past().getMinutes()}`}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
