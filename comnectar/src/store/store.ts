import {configureStore} from 'react-redux';
import { tokenReducer } from "./tokens/tokensReducer";

const store = configureeStore(tokenReducer);

export default store;