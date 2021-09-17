import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero"
import TabMenu from "../../components/TabMenu";
import data from "../../utils/userData.json"

const Home = ()=>{
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        setUserData(data.content)
    },[userData])

    
    return(
        <>
            <Hero/>
            <TabMenu data={userData}/>
        </>
    )
}

export default Home;