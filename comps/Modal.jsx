import {MdClose} from 'react-icons/md'

const Modal = ({showModal, setShowModal}) => {
  return (
    <>
    {showModal? (
      <div className="bg">
        <div className="wrapper">
          <img src='/vercel.svg' alt='vercel' />
          <div className="content">
            <h1>Are your ready?</h1>
            <p>Get exclusive access to our next release</p>
            <button className="bt">Join</button>
          </div>
          <button className="close" onClick={setShowModal}>x</button>
        </div>
      </div>
    ):null}
    </>
  )
}

export default Modal