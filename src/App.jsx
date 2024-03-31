import { useRecoilValue } from 'recoil';
import {
	actionsState,
	settingsState,
	messageState,
	notificationState,
	totalNotificationSelector,
} from './store/atoms/homepageAtoms';

function App() {
	const notifications = useRecoilValue(notificationState);
	const messages = useRecoilValue(messageState);
	const settings = useRecoilValue(settingsState);
	const actions = useRecoilValue(actionsState);

	const totalNotificationsState = useRecoilValue(totalNotificationSelector);

	return (
		<div className='app'>
			<button>Home</button>
			<button>
				Notifications ({notifications > 100 ? '99+' : notificationState})
			</button>
			<button>Messages ({messages})</button>
			<button>Home ({settings})</button>
			<button>Home ({actions})</button>

			<div>total {totalNotificationsState}</div>
		</div>
	);
}

export default App;
