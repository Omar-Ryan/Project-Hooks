import  {React, useContext } from 'react'
import { ChannelContext, UserContext } from '../App'


const ContextC = () => {
    const User = useContext (UserContext) ;
    const Channel = useContext(ChannelContext);
  return (
    <div>
        <h2>My Name Is {User} and learn {Channel}</h2>
    </div>
  )
}

export default ContextC