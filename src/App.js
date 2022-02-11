import { useState } from 'react';
import AddList from './AddList';
import './App.css';
import Modal from './Modal';

const data = [
  {
    id: 1,
    title: "I love Javascript",
    startDate: "01/01/2022"
  },
  {
    id: 2,
    title: "I love Python",
    startDate: "01/02/2022"
  },
  {
    id: 3,
    title: "I love php",
    startDate: "01/03/2022"
  }
]

function App() {
  const [list, setList] = useState(data)
  const [showModal, setShowModal] = useState(false)
  
  const handleDelete = (id) => {
    const filterList = list.filter(item => item.id !== id)
    setList(filterList)
  }
  return (
    <div className="App">
      {
        list.map(item => (
          <div onClick={() => handleDelete(item.id)} key={item.id} className="card">
          <h2>{item.title}</h2>
          <p>{item.startDate}</p>
          </div>
        )

        )
      }
      <div className='button_cntainer'>
        <button onClick={(e) => setShowModal(true)}>Add List</button>
      </div>

      {
        showModal && <Modal>
          <AddList setList={setList} setShowModal = {setShowModal} />
          <button onClick={e => setShowModal(false)}>Close Modal</button>
        </Modal>
      }
      
      
    </div>
  );
} 

export default App;
