import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    const format = (userName) => `@${userName}`
    return (
        <section className="App">
            <TwitterFollowCard 
                formatUsername={format}
                userName={"midudev"} 
                name={"Miguel Angel Duran"} />

            <TwitterFollowCard 
                formatUsername={format}
                isFollowing userName={"natalia"} 
                name={"Natalia Moncaleano Montero"} />

            <TwitterFollowCard 
                formatUsername={format}
                userName={"dalasReview"} 
                name={"Dalas"} />
        </section>
    )
}