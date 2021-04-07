import React from "react";
import { Carousel, ModalFooter } from "react-bootstrap";
import NavBar from "../Components/NavBar";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Carousel style={{ marginTop: "10px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/Rb41272c31d513bac7b90fe2feec165d7?rik=vyWzS%2bVn3mbqtw&riu=http%3a%2f%2fwww.bodegacantina.co.uk%2fwp-content%2fuploads%2f2018%2f05%2fIMG_4278.jpg&ehk=RcJeHfdMM403H6a%2fLRBI7ctcx%2fGN4eYmuBbmgxX12y0%3d&risl=&pid=ImgRaw"
            alt="cocktails timing"
          />

          <Carousel.Caption>
            <h3>cocktails Time</h3>
            <p>are you ready to dicover cocktails world!.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://busratesblog.com/wp-content/uploads/2018/07/Alcohol-on-buses.jpg"
            alt="cocktails glasses"
          />
          <br />
          <br />
          <br />
          <br />
          <Carousel.Caption style={{ color: "black" }}>
            <h3>Cocktails glasses</h3>
            <p>you can find the perfect glass for the your drink.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://www.dmarge.com/wp-content/uploads/2020/07/margarita-cocktail.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>ingreadients are the the next step</h3>
            <p>
              You get to know the right ingredient for you preferable drink.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <ModalFooter>
        In this app you can find all diffrent kind of <strong>Cocktails</strong>{" "}
        and the way to make it ..
      </ModalFooter>
    </div>
  );
}
