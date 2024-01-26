import React, { FC } from 'react';
import './BasketModal.css';

interface BaskeModalProps {
  isVisible: boolean;
}

const BasketModal: FC<BaskeModalProps> = (props: BaskeModalProps) => (

  <div id="myModal" className="modal" style={{display: props.isVisible ? 'block' : 'none'}}>
    <div className="modal-content">
      <span className="close">&times;</span>
      <p>Some text in the Modal..</p>
    </div>
  </div>


);

export default BasketModal;
