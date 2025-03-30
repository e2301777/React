import './vanilla.css'
import Div from './Div.jsx';


export default function ProfileCard({ style, useStyled }) {

    const Container = useStyled ? Div : 'div';

    return (
        <Container className={!useStyled ? style : ''}>
            <img src="/DSC09843.jpg" alt="avatar" />
            <h2>Matti Meikäläinen</h2>
            <p>Full-stack developer, passionate about coding and coffee</p>
            <button>{style}</button>
        </Container>
    );
  }