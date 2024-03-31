import { useRecoilValue } from 'recoil';
import {
	notifications,
	totalNotificationSelector,
} from './store/atoms/homepageAtoms';

function App() {
	const networkCount = useRecoilValue(notifications);
	const totalNotificationCount = useRecoilValue(totalNotificationSelector);

	console.log({ networkCount });
	return (
		<>
			<button>Home</button>

			<button>
				My network (
				{networkCount?.network >= 100 ? '99+' : networkCount?.network})
			</button>
			<button>Jobs {networkCount.jobs}</button>
			<button>Messaging ({networkCount.messaging})</button>
			<button>Notifications ({networkCount.notifications})</button>

			<button>Me ({totalNotificationCount})</button>
		</>
	);
}

export default App;
