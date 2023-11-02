import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { createSlice } from '@reduxjs/toolkit';

// This file serves as the single source of truth for all CAMPSITES data
// We will add/update all selector function pertaining to campsites here

const initialState = {
    campsitesArray: CAMPSITES
}

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
})

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
}

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
        )
}

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
}