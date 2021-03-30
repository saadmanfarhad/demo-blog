import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'

export default function Header () {
  const [session] = useSession()

  const handleLogin = (e) => {
    e.preventDefault()
    signIn('github')
  }

  const handleLogout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <div className='header'>
      <Link href='/'>
        <a className='title'>My Blog</a>
      </Link>
      {session && (
        <Link href='/dashboard'>
          <a>Dashboard</a>
        </Link>
      )}
      <div className="user-info">
        {session? (
          <>
            <img src={session.user.profile.avatar} className="user"/>
            <a href="#" onClick={handleLogout} className="logout">Logout</a>
          </>
        ) : (
          <a href="#" onClick={handleLogin} className="logout">Login</a>
        )}
      </div>
    </div>
  )
}