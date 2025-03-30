export default function ProfileCard({ style }) {
    return (
      <div className={style}>
        <img src="https://via.placeholder.com/100" alt="avatar" />
        <h2>Matti Meikäläinen</h2>
        <p>Full-stack developer, passionate about coding and coffee</p>
        <button>Contact Me</button>
      </div>
    );
  }