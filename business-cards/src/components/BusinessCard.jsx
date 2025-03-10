export default function BusinessCard({ name, education, jobTitle, company, email, logo, isHidden }) {
    return (
        <div className="businessCard">
            <img src={logo} alt="VAMK" />
            <h3 className="bc">{name}</h3>
            <h4 className="bc">{education}</h4>
            <p>{jobTitle}</p>
            <p>{company}</p>
            <p className={isHidden}>{email}</p>
        </div>
    )
}