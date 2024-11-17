function Home() {
    return (
        <>
            <div className="container">
                <div className="interactive-box" onClick={() => window.location.href = "/about"}>About</div>
                <div className="interactive-box" onClick={() => window.location.href = "/projects"}>Projects</div>
                <div className="interactive-box" onClick={() => window.location.href = "/contact"}>Contact</div>
            </div>
        </>
    )
}

export default Home;