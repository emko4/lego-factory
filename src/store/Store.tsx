import type { FC, PropsWithChildren } from 'react';
import { createContext, useReducer, useContext } from 'react';
import type { State, Action, ContextValue } from './types';
import type { EquipmentState, Brick } from '../types';
import { setEquipmentState, setBrickType } from './actions';

const initialState: State = {
    equipments: [
        { state: 'STANDING', brickType: 'BRICK', history: [] },
        { state: 'STARTING_UP', brickType: 'PLATE', history: [] },
        { state: 'RUNNING', brickType: 'TILE', history: [] },
        { state: 'WINDING_DOWN', brickType: 'TIRE', history: [] },
    ]
};

const StoreContext = createContext<ContextValue>({
    state: initialState,
    setEquipmentState: () => {},
    setBrickType: () => {},
});

export const Provider = StoreContext.Provider;

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_EQUIPMENT_STATE':
            return {
                ...state,
                equipments: state.equipments.map((equipment, index) => ({
                    ...equipment,
                    state: action.id === index ? action.data : equipment.state,
                })),
            };
        case 'SET_BRICK_TYPE':
            return {
                ...state,
                equipments: state.equipments.map((equipment, index) => ({
                    ...equipment,
                    brickType: action.id === index ? action.data : equipment.brickType,
                })),
            };
        default:
            return state;
    }
}

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

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
                setEquipmentState: handleSetEquipmentState,
                setBrickType: handleSetBrickType
            }}
        >
            {children}
        </Provider>
    );
};

const useStore = () => {
    const { state, setEquipmentState, setBrickType } = useContext(StoreContext);

    return {
        equipments: state.equipments || [],
        setEquipmentState,
        setBrickType,
    }
}

export { StoreProvider, useStore };
