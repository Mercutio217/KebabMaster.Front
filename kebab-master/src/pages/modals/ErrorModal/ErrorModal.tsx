import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../hooks';
import { clearErrorMessage } from '../../../store/slices/commonSlice';
import '../CommonModal.css';


interface ErrorModalProps {}

const ErrorModal: FC<ErrorModalProps> = () => {
  
  const errorMsg:string = useSelector((state: RootState) => state.common.errorMessage);
  const isModalVisible = errorMsg.length > 0;

  const dispatch = useAppDispatch();

  return (
    <div className='modal-background' style={{ display: isModalVisible ? 'block' : 'none' }}>
    <div className="modal" tabIndex={-1} style={{ display: isModalVisible ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Error!</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dispatch(clearErrorMessage())}></button>
          </div>
          <div className="modal-body">
            <div>{errorMsg}</div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={() => dispatch(clearErrorMessage())}>Close</button>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default ErrorModal;
