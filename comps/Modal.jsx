import {useEffect, useRef, useCallback} from 'react'
import {useSpring, animated} from 'react-spring'


const Modal = ({showModal, setShowModal}) => {
  let modalRef = useRef();
  let animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1: 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  let closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  let keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    }, 
    [setShowModal, showModal]
  )

  useEffect(()=>{
    document.addEventListener('keydown', keyPress)

    return document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <>
    {showModal? (
      <div className="background" onClick={closeModal} ref={modalRef}>
        <animated.div style={animation}>

        <div className="wrapper">
          <img src='https://images.unsplash.com/photo-1614607206234-f7b56bdff6e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' alt='vercel' />
          <div className="content">
            <h1>Are your ready?</h1>
            <p>Get exclusive access to our next release</p>
            <button className="bt">Join</button>
          </div>
          <button className="close" onClick={()=>setShowModal(prev=>!prev)}>x</button>
        </div>
        </animated.div>
      </div>
    ):null}
    </>
  )
}

export default Modal