import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require(`./img/fail_1.jpeg`)}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2> 코인으로 부자가 될거라고 생각하십니까? </h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require(`./img/fail_2.jpeg`)}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2> 주식으로 전재산 날리고 싶으시다면 존버하세요 !!</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require(`./img/lotto_1.jpeg`)}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2>로또만이 우리가 부자될 수 있는 길입니다!!! </h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

const MyHeader = ({ name }) => {
    return (
        <Container>
            부자가 되고 싶은 당신 여기가 지름 길입니다.
            <UncontrolledExample>

            </UncontrolledExample>
        </Container>

    );
};

export default MyHeader;