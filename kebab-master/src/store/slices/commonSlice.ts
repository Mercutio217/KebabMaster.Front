import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const commonSlice = createSlice({
    name: 'common',
    initialState: {
        errorMessage: '',
        successMessage: ''
    },
    reducers: {
      setErrorMessage: (state, { payload }: PayloadAction<string>) => {
        state.errorMessage = payload;
      },
      clearErrorMessage: (state) => {
        state.errorMessage = '';
      },
      setSuccessMessage: (state, { payload }: PayloadAction<string>) => {
        state.successMessage = payload;
      },
      clearSuccessrMessage: (state) => {
        state.successMessage = '';
      }
    }
  });

export const { setErrorMessage, clearErrorMessage, setSuccessMessage, clearSuccessrMessage } = commonSlice.actions;
export { commonSlice }; 