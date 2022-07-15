import React from "react";
import "animate.css";
import "./App.css";

const backgroundChanger = (e) => {
  console.log(e.target.innerText);
  let p = document.createElement("p");

  let bgImage = document.getElementById("logo-img");

  let paraArticle = document.getElementById("tech-stack-paragraph");
  if (e.target.innerText === "ReactJS") {
    bgImage.setAttribute("style", "width:300px;height:300px");
    bgImage.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    );

    p.innerHTML = "blahblahbalbhal";
    paraArticle.appendChild(p);
    p.setAttribute(
      "className",
      "animate__animated animate__fadeInLeft animate__slow"
    );
  }
};
const App = () => {
  return (
    <div className="App">
      <div className="App-body" id="App-body">
        <header className="navbar">
          <article className="techstack">
            <div className="dropbtn">Tech Stack</div>
            <section className="dropdown-one">
              <div id="link1" className="dItem">
                JavaScript
                <article className="dropdown-two">
                  <span
                    className="dItem"
                    id="file"
                    onClick={(e) => backgroundChanger(e)}
                  >
                    ReactJS
                  </span>
                  <span className="dItem" id="file">
                    Redux
                  </span>
                  <span className="dItem" id="file">
                    Express, Cors, Axios
                  </span>
                  <span className="dItem" id="file">
                    EcmaScript
                  </span>
                </article>
              </div>
              <div className="dropdown-one">
                <div id="link1" className="dItem">
                  Python
                  <div className="dropdown-two">
                    <span className="dItem" id="file">
                      BS4 - Selenium
                    </span>
                    <span
                      className="dItem"
                      id="file"
                      onClick={(e) => backgroundChanger(e)}
                    >
                      FastAPI
                    </span>
                  </div>
                </div>

                <div id="link1" className="dItem">
                  HTML & CSS
                  <div className="dropdown-two">
                    <span className="dItem" id="file">
                      SASS CSS
                    </span>
                    <span className="dItem" id="file">
                      Styled Components
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </header>
      </div>
      <main>
        <section>
          <article
            className="tech-stack-paragraph"
            id="tech-stack-paragraph"
          ></article>

          <article>
            <img src="" alt="..." id="logo-img" />
          </article>
        </section>
      </main>
    </div>
  );
};

export default App;
