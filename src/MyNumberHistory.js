import React, { useState } from "react";


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
        <div>
            <div className='filter'>
                <div className='filter-header'>회차정보</div>
                <form onSubmit={NumberSubmit}>
                    <input type="text" name="start" placeholder="시작회차" value={start} onChange={startHandleChange} />
                    <input type="text" name="end" placeholder="종료회차" value={end} onChange={endHandleChange} />
                    <button type="submit">조회</button>
                </form>
            </div>
            <div className="number-history">
                <div>
                    <table>
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
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MyNumberHistory;