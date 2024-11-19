import './MyManager.css';

function MyManager() {
    return (
        <>
            <div className="main-container">
                <div className="tasks-box">
                    <div className="date-box">
                        <text>Monday</text>
                        <text>18/11</text>
                    </div>
                    <div className="tasks-inner-box">
                        <div className="tasks-grids">
                            <div className="task-item">
                                <div className="task-checkbox"></div>
                            </div>
                            <div className="task-item">2</div>
                            <div className="task-item">3</div>
                            <div className="task-item">4</div>
                            <div className="task-item">5</div>
                            <div className="task-item">6</div>
                            <div className="task-item">7</div>
                            <div className="task-item">8</div>
                            <div className="task-item">9</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyManager;
