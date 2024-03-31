import axios from 'axios';
import { atom, selector } from 'recoil';

export const notifications = atom({
	key: 'networkAtom',
	default: selector({
		key: 'networkAtomSelector',
		get: async () => {
			// add a delay to see the white screen clearly:
			// await new Promise(res => setTimeout(res, 5000))
			const res = await axios.get(
				'https://sum-server.100xdevs.com/notifications'
			);

			return res.data;
		},
	}),
});

export const totalNotificationSelector = selector({
	key: 'totalNotificationSelector',
	get: ({ get }) => {
		const allNotifications = get(notifications);
		return (
			allNotifications.network +
			allNotifications.jobs +
			allNotifications.notifications +
			allNotifications.messaging
		);
	},
});
