import './vanilla.css'
import Div from './Div.jsx';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';

export default function ProfileCard({ style, useStyled }) {

    const Container = useStyled ? Div : 'div';
    if (style !== 'materialUI'){
        return (
            <Container className={style === 'tailwind' ? 'flex flex-col items-center text-center font-[Arial] w-[300px] h-auto bg-[#f5f5f5] rounded-sm border border-[#e0e0e0]' : !useStyled ? style : ''}>
                <img src="/DSC09843.jpg" alt="avatar" />
                <h2 className={style === 'tailwind' ? 'font-bold text-[20px]' : undefined}>Matti Meikäläinen</h2>
                <p className={style === 'tailwind' ? 'text-[#666] text-[14px]' : undefined}>Full-stack developer, passionate about coding and coffee</p>
                <button className={style === 'tailwind' ? 'w-[120px] text-white bg-[#1976d2] rounded-[4px] mb-[20px]' : undefined}>{style}</button>
            </Container>
        );
    }
    else{
        return (
            <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    fontFamily: 'Arial',
                    width: 300,
                    height: 'auto',
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    padding: 2,
                }}>
                <img src="/DSC09843.jpg" alt="avatar" />
                <Typography variant='h6' component='h2'>Matti Meikäläinen</Typography>
                <Typography
                    variant="body2"
                    sx={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}
                >
                    Full-stack developer, passionate about coding and coffee
                </Typography>
                <Button variant='contained' sx={{width: 100}}>Material UI</Button>
            </Box>
        );
    }
   
  }