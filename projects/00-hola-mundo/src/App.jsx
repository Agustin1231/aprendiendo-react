import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    const format = (userName) => `@${userName}`
    return (
        <section className="App">
            <TwitterFollowCard 
                formatUsername={format}
                userName={"midudev"}> Miguel Angel Duran</TwitterFollowCard>

            <TwitterFollowCard 
                formatUsername={format}
                isFollowing userName={"natalia"}> Natalia Moncaleano Montero </TwitterFollowCard>

            <TwitterFollowCard 
                formatUsername={format}
                userName={"dalasReview"}> Dalas</TwitterFollowCard>
        </section>
    )
}