import {combineReducers} from 'redux';
import errorsReducer from './errors.reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
});

export default rootReducer;