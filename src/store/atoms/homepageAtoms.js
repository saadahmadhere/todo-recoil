import { atom } from 'recoil';

export const notificationState = atom({
	key: 'Notifications',
	default: 145,
});
export const messageState = atom({
	key: 'Message',
	default: 75,
});
export const SettingsState = atom({
	key: 'Settings',
	default: 49,
});
export const ActionsState = atom({
	key: 'Actions',
	default: 15,
});
