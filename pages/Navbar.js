import Router from 'next/router'

export const Navbar = (props) => {
  return (
    <>
      <nav className='okayNav'>
        <i
          className='fas fa-arrow-left fa-lg nav-arrow'
          onClick={() => Router.back()}
        ></i>
        <span className='nav-title'>{props.title}</span>
      </nav>
    </>
  )
}
