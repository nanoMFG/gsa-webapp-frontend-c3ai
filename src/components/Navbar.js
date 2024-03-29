import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalContext} from "../pages/App";
import UserGuide from '../assets/UserGuide.pdf';
const Navbar = () => {
  const {flashSuccess, userState, userDispatch} = useContext(GlobalContext)

  const signOut = () => {
    userDispatch({type: 'SIGN_OUT'})
    window.localStorage.removeItem('token')
    window.location.href = '/'
    flashSuccess('You have been signed out.')
  }

  const tool =
  <Link to='/tool'
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  GR-RESQ Tool
                </Link>

  const userGuide = (
    <a
      href={UserGuide}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      User Guide
    </a>
  );

  const signInUp =
    <>
      <Link to='/signin'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
        Sign In
      </Link>
      <Link to='/signup'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
        Sign Up
      </Link>
    </>
  const submit =
    <>
       <Link to='/submit'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
        Submit
      </Link>
    </>
  const profile =
    <>
      <Link to='/profile'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
        {userState.userId}
      </Link>
    </>
  const signout =
    <>
      <button
        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        onClick={signOut}
      >
        Sign Out
      </button>
    </>

  const manageGroups =
  <>
    <Link to='/managegroups'
          className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
      Manage Groups
    </Link>
  </>

  const manageUsers =
  <>
    <Link to='/manageusers'
          className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
      Manage Users
    </Link>
  </>

  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>       
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                {userState.signedIn && tool}
              </div>
            </div>
          </div>
          <div>
            {userGuide}
          </div>
          <div>
            {userState.signedIn && userState.isAdmin && manageGroups}
          </div>
          <div>
            {userState.signedIn && userState.isAdmin && manageUsers}
            {/* {userState.signedIn && (userState.isAdmin || userState.isModerator) && manageUsers} */}
          </div>
          <div>
            {userState.signedIn && submit}
            {userState.signedIn && !userState.isAdmin && profile}
            {userState.signedIn && signout}
            {userState.signedIn || signInUp}
          </div>
        </div>
      </div>

      {/* <div className='sm:hidden' id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
            {userState.signedIn && tool}
        </div>
      </div> */}
    </nav>
  )
}

export default Navbar
