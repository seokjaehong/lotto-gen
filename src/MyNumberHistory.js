import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Button, ButtonToolbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

// ReactComponent
//     - props => 부모로부터 주입받는 값
//         - state => 자기 내부에서 관리하는 값


const TableRow = ({ data }) => {
    return (
        <tr>
            {/* <td>{data.Round}</td> */}
            <td>{data.numbers[0]}</td>
            <td>{data.numbers[1]}</td>
            <td>{data.numbers[2]}</td>
            <td>{data.numbers[3]}</td>
            <td>{data.numbers[4]}</td>
            <td>{data.numbers[5]}</td>
        </tr>
    )
};

const MyNumberHistory = () => {
    const headerMeta = [
        // "Round", 
        "No1", "No2", "No3", "No4", "No5", "No6",

    ];
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(2);
    const NUMBERS_URL = "https://b98j4vwd2d.execute-api.ap-northeast-2.amazonaws.com/new_param_to_round/lottery_history/" + start + '/' + end
    const [results, setResults] = useState([])

    const fetchNumbers = async () => {
        const response = await fetch(NUMBERS_URL);
        const result = await response.json();
        setResults(result.data)
    };

    async function NumberSubmit(e) {
        e.preventDefault();
        await fetchNumbers();
    }

    function startHandleChange(e) {
        setStart(e.target.value);

    }
    function endHandleChange(e) {
        setEnd(e.target.value);
    }
    return (
        <Container>
            {/* <Container className='bg-light rounded-5'>회차정보</Container> */}
            <Container className='p-5 mb-4 bg-light rounded-3'>
                <Form onSubmit={NumberSubmit}>
                    <Form.Group className="mb-3" controlId="start">
                        <Form.Label>시작회차번호</Form.Label>
                        <Form.Control type="input" placeholder="start round" value={start} onChange={startHandleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="end" >
                        <Form.Label>종료회차번호</Form.Label>
                        <Form.Control type="input" placeholder="start round" value={end} onChange={endHandleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >조회</Button>
                </Form>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            {headerMeta.map(i => <th key={`num_header_${i}`}>{i}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {results.filter(s => s !== null).map((d, idx) => {
                            return (<TableRow key={`num_table_${idx}`} data={d} />)
                        })}
                    </tbody>
                </Table>

            </Container>
        </Container>
    );
}

export default MyNumberHistory;