import { localize } from '@deriv-com/translations';

export const getDefaultError = () => ({
    header: localize('Sorry for the interruption'),
    description: localize('Our servers hit a bump. Let’s refresh to move on.'),
    cta_label: localize('Refresh'),
});

export const getAuthError = () => ({
    header: localize('Invalid Token'),
    description: localize('The token you provided is invalid. Please sign in again to continue.'),
    cta_label: localize('Sign in again'),
});

export const STATUS_CODES = Object.freeze({
    NONE: 'none',
    PENDING: 'pending',
    REJECTED: 'rejected',
    VERIFIED: 'verified',
    EXPIRED: 'expired',
    SUSPECTED: 'suspected',
});
