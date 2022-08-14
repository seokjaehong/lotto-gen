
import React, { useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const RandomNumber = ({ randomNumber }) => {

    const RANDOM_URL = "https://b98j4vwd2d.execute-api.ap-northeast-2.amazonaws.com/new_param_to_round/lottery_history/" + (Math.random() * 1000).toFixed().toString()
    const [randomNumbers, setRandomNumbers] = useState([])

    const fetchRandomNumber = async () => {
        const response = await fetch(RANDOM_URL);
        const result = await response.json();
        setRandomNumbers(result.data.numbers)
    };

    async function RandomNumberSubmit(e) {
        e.preventDefault();
        await fetchRandomNumber();
        console.log(randomNumbers)
    }


    return (
        <Container className='p-5 mb-4 bg-light rounded-3'>

            <Form onSubmit={RandomNumberSubmit}>
                <ButtonToolbar>
                    <Button variant="primary" type="submit" >랜덤번호받기</Button>
                </ButtonToolbar>
            </Form>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>조회결과</Accordion.Header>
                    <Accordion.Body>
                        <CardGroup>
                            {randomNumbers.filter(s => s !== null).map(num =>
                                <Card style={{ width: '18rem' }}>
                                    {/* <Card.Img variant="top" src={`img/num_${num}.png`} /> */}
                                    <Card.Img variant="top" src={require(`./img/num_${num}.png`)} />
                                    <Card.Body>
                                        <Card.Title>{num}</Card.Title>
                                        {/* <Button variant="primary">useless button</Button> */}
                                    </Card.Body>
                                </Card>)}
                        </CardGroup>
                    </Accordion.Body></Accordion.Item>
            </Accordion>
        </Container>)
}
export default RandomNumber;