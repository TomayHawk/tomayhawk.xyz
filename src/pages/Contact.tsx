function Contact() {
    return (
        <>
            <div className="main-container">
                <div className="interactive-box" onClick={() => window.location.href = "/"}>Home</div>
                <div className="interactive-box" onClick={() => window.location.href = "/about"}>About</div>
                <div className="interactive-box" onClick={() => window.location.href = "/projects"}>Projects</div>
            </div>
        </>
    )
}

export default Contact;