import React from "react"

export default function Main() {
    return (
        <main>
            <img src="./images/1.png"/>
            <div className="main-wrapper">
                <h1 className="name">Rick Sanchez</h1>
                <p className="job">Asshole Scientist</p>
                <p className="website">Website.website.ge</p>
                <button className="btn"><span><img src="./images/Icon.png"/></span>Email</button>
            
                <div className="info">
                    <h2>About</h2>
                    <p>My name is Rick, nothing much to say about me. You can just watch previous 6 seasons, 2nd  and 3rd - my favorite.  I'll be back in season 7. wubalubadubdub!</p>
                </div>
                <div className="info">
                    <h2>Interests</h2>
                    <p>as I said - nothing much to say about me. You can just watch those 6 seasons, 2nd  and 3rd - my favorite.  I'll be back in season 7. wubalubadubdub!</p>
                </div>
            </div>
        </main>
    )
}