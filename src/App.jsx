import { useRecoilValue } from 'recoil';
import {
	ActionsState,
	SettingsState,
	messageState,
	notificationState,
} from './store/atoms/homepageAtoms';

function App() {
	const notifications = useRecoilValue(notificationState);
	const messages = useRecoilValue(messageState);
	const settings = useRecoilValue(SettingsState);
	const actions = useRecoilValue(ActionsState);

	return (
		<div className='app'>
			<button>Home</button>
			<button>
				Notifications ({notifications > 100 ? '99+' : notificationState})
			</button>
			<button>Messages ({messages})</button>
			<button>Home ({settings})</button>
			<button>Home ({actions})</button>
		</div>
	);
}

export default App;
