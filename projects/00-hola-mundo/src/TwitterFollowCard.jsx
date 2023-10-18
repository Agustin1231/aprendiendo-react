export function TwitterFollowCard ({ formatUsername, userName, children, isFollowing}){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src= {`https://unavatar.io/${userName}`} alt="El avatar de nmoncaleano" />
                <div className='tw-followCard-info'>
                    <strong >{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUsername(userName)}</span>
                </div>
            </header>

        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
        </article>
    )
}