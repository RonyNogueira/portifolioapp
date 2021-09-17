import React, { useState } from "react";
import "./style.css";


const TabMenu = ({data}) =>{
    const [id, setId] = useState(0)
    return(
        <section>
            <div className="nav-panel">
                <nav>
                    {
                       data.map((d, index)=>(
                        <button key={index} onClick={()=> setId(index)} className={`tab ${id === index ? "tab-active": "tab-inative"}`}>{d.title}</button>
                       ))
                    }
                </nav>
            </div>
            <div className="cards">
                {
                     data[id]?.posts.map((post)=>(
                        <a href={post.link} className="card" style={{backgroundImage:`url(${post.background})`}}>
                            <h3>{post.title}</h3>
                        </a>
                     ))
  
                }
                
            </div>
        </section>
    )
}

export default TabMenu;