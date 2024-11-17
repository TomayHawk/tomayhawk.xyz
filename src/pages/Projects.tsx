function Projects() {
    return (
        <>
            <div className="container">
                <div className="interactive-box" onClick={() => window.location.href = "/"}>Home</div>
                <div className="interactive-box" onClick={() => window.location.href = "/about"}>About</div>
                <div className="interactive-box" onClick={() => window.location.href = "/contact"}>Contact</div>
                <div className="interactive-box" onClick={() => window.location.href = "/projects/my-manager"}>MyManager</div>
            </div>
        </>
    )
}

export default Projects;