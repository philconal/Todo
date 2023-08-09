import {ADD_JOB, DELETE_JOB, SET_JOB} from "./constants";

export const initialize = {
    job:"",
    jobs:[]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job:action.payload
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            };
        case DELETE_JOB:
            return {
                ...state,
                jobs : state.jobs.filter(item => item !==action.payload)
            };
        default :
            throw Error("invalid action")

    }
}

