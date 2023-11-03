import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    const formatUserName = (username) => `@${username}`

    return (
        <section className='App'> 
            <TwitterFollowCard 
                formatUserName={formatUserName}
                username={"midudev"} 
                name={"Miguel Angel Durán"} 
                isFollowing
            />
            <TwitterFollowCard 
                formatUserName={formatUserName}
                username={"win1125"} 
                name={"Edwin Fandiño Salazar"} 
                isFollowing={false}
            />
        </section>
    )
}