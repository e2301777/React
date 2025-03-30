import {styled} from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: auto;
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    border-radius: 8px;

    & h2{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
}

    & p{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #666;
}

    & button{
    background-color: #1976d2;
    color: white;
    width: 120px;
    border-radius: 4px;
    margin-bottom: 20px;
}

    & img{
    border-radius: 50%;
    width: 100px;
}
`

export default Div;



