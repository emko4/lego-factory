import type { FC, PropsWithChildren } from 'react';
import { createContext, useReducer, useContext } from 'react';
import type { State, Action, ContextValue } from './types';
import type { EquipmentState, Brick } from '../types';
import { setSelectedEquipment, setEquipmentState, setBrickType } from './actions';

const initialState: State = {
    selectedEquipment: 0,
    equipments: [
        { state: 'STANDING', brickType: 'BRICK', history: [] },
        { state: 'STARTING_UP', brickType: 'PLATE', history: [] },
        { state: 'RUNNING', brickType: 'TILE', history: [] },
        { state: 'WINDING_DOWN', brickType: 'TIRE', history: [] },
    ]
};

const StoreContext = createContext<ContextValue>({
    state: initialState,
    setSelectedEquipment: () => {},
    setEquipmentState: () => {},
    setBrickType: () => {},
});

export const Provider = StoreContext.Provider;

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
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

export { StoreProvider, useStore };
