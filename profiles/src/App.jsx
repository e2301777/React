import ProfileCard from './components/ProfileCard'

function App() {


  return (
    <div className="profile-container">
        <ProfileCard style="vanilla" useStyled={false}/>
        <ProfileCard style="styled" useStyled={true}/>
        <ProfileCard style="tailwind" useStyled={false}/>
        <ProfileCard style="materialUI" useStyled={false}/>
    </div>
  )
}

export default App
