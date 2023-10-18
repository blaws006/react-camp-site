import { CAMPSITES } from '../../app/shared/CAMPSITES';

// This file serves as the single source of truth for all CAMPSITES data
// We will add/update all selector function pertaining to campsites here

export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
}