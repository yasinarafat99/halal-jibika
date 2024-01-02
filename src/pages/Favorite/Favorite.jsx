import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firbase/firbase.config';

function Favorite() {
  const [user] = useAuthState(auth)
  console.log(user)
  return (
    <>
      <h1>Im Favorite PAge</h1>
    </>
  )
}

export default Favorite;