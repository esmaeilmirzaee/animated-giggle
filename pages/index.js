import { useState } from 'react';
import Head from 'next/head';
import Modal from '../comps/Modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <button onClick={openModal} className='btn'>
          I'm a modal
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </main>
    </div>
  );
}
