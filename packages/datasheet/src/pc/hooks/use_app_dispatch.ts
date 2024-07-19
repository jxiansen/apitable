

import { useDispatch } from 'react-redux';
import { AppDispatch } from 'pc/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
