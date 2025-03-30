import ProfileCard from './components/ProfileCard'

function App() {


  return (
    <div className="profile-container">
        <ProfileCard style="vanilla" useStyled={false}/>
        <ProfileCard style="styled" useStyled={true}/>
        <ProfileCard style="vanilla" useStyled={false}/>
        <ProfileCard style="vanilla" useStyled={false}/>
    </div>
  )
}

export default App
