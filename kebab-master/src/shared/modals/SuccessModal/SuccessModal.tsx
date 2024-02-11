import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../hooks';
import { clearErrorMessage, clearSuccessrMessage } from '../../../store/slices/commonSlice';
import '../CommonModal.css';
import { useNavigate } from 'react-router';


interface ErrorModalProps {}

const SuccessModal: FC<ErrorModalProps> = () => {
  
  const successMsg:string = useSelector((state: RootState) => state.common.successMessage);
  const navigate = useNavigate();
  const isModalVisible = successMsg.length > 0;
  const handleClose = () => {
    dispatch(clearSuccessrMessage());
    navigate('/menu');
  }
  const dispatch = useAppDispatch();

  return (
    <div className='modal-background' style={{ display: isModalVisible ? 'block' : 'none' }}>
    <div className="modal" tabIndex={-1} style={{ display: isModalVisible ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Success!</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <h3>{successMsg}</h3>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default SuccessModal;
