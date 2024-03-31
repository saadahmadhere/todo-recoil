import { atom, selector } from 'recoil';

export const notificationState = atom({
	key: 'Notifications',
	default: 145,
});
export const messageState = atom({
	key: 'Message',
	default: 75,
});
export const settingsState = atom({
	key: 'Settings',
	default: 49,
});
export const actionsState = atom({
	key: 'Actions',
	default: 15,
});

export const totalNotificationSelector = selector({
	key: 'TotalNotificationSelector',
	get: ({ get }) => {
		return (
			get(notificationState) +
			get(messageState) +
			get(settingsState) +
			get(actionsState)
		);
	},
});
