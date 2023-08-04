import type { FC, PropsWithChildren } from 'react';
import { createContext, useReducer, useContext } from 'react';

import type {State, Action, ContextValue, Equipment} from './types';
import type { EquipmentState, Brick } from '../types';
import { setFactory, setSelectedEquipment, setEquipmentState, setBrickType } from './actions';
import { generateFactory } from "./generator";

const initialState: State = {
    selectedEquipment: 0,
    equipments: generateFactory(),
};

const StoreContext = createContext<ContextValue>({
    state: initialState,
    setFactory: () => {},
    setSelectedEquipment: () => {},
    setEquipmentState: () => {},
    setBrickType: () => {},
});

const Provider = StoreContext.Provider;

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_FACTORY':
            return {
                selectedEquipment: 0,
                equipments: action.data,
            }
        case 'SET_SELECTED_EQUIPMENT':
            return {
                ...state,
                selectedEquipment: action.id,
            };
        case 'SET_EQUIPMENT_STATE':
            return {
                ...state,
                equipments: state.equipments.map((equipment, index) => ({
                    ...equipment,
                    state: action.id === index ? action.data : equipment.state,
                    history: action.id === index ? [{
                        datetime: new Date(),
                        action: action.type,
                        data: action.data,
                    }, ...equipment.history] : equipment.history,
                })),
            };
        case 'SET_BRICK_TYPE':
            return {
                ...state,
                equipments: state.equipments.map((equipment, index) => ({
                    ...equipment,
                    brickType: action.id === index ? action.data : equipment.brickType,
                    history: action.id === index ? [{
                        datetime: new Date(),
                        action: action.type,
                        data: action.data,
                    }, ...equipment.history] : equipment.history,
                })),
            };
        default:
            return state;
    }
}

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSetFactory = (factory: Equipment[]) => {
        dispatch(setFactory(factory));
    }

    const handleSetSelectedEquipment = (id: number) => {
        dispatch(setSelectedEquipment(id));
    }

    const handleSetEquipmentState = (id: number, equipmentState: EquipmentState) => {
        dispatch(setEquipmentState(id, equipmentState));
    }

    const handleSetBrickType = (id: number, brick: Brick) => {
        dispatch(setBrickType(id, brick));
    }

    return (
        <Provider
            value={{
                state,
                setFactory: handleSetFactory,
                setSelectedEquipment: handleSetSelectedEquipment,
                setEquipmentState: handleSetEquipmentState,
                setBrickType: handleSetBrickType
            }}
        >
            {children}
        </Provider>
    );
};

const useStore = () => {
    const { state, setSelectedEquipment, setEquipmentState, setBrickType } = useContext(StoreContext);

    return {
        selectedEquipment: state.selectedEquipment,
        equipments: state.equipments || [],
        setSelectedEquipment,
        setEquipmentState,
        setBrickType,
    }
}

const useResetStore = () => {
   const { setFactory } = useContext(StoreContext);

   return { setFactory };
}

export { StoreProvider, useStore, useResetStore };
