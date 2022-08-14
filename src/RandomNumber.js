
import React, { useState } from 'react';

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
        <div className='random-number'>
            <form onSubmit={RandomNumberSubmit}>
                <button type='submit'>랜덤번호받기</button>
            </form>
            <div>
                {randomNumbers.filter(s => s !== null).map(num => <div key={num}> {num} </div>)}
            </div>
        </div>)
}
export default RandomNumber;