import { data } from './data/data';
import './components/indexPadre';
import MyCard, { Attribute } from './components/card/card';
import Card from './components/card/card';

class AppContainer extends HTMLElement {
	cards: MyCard[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const filteredWorkers = data.filter((user) => user.id % 2 === 0);

		filteredWorkers.forEach((user) => {
			const profileCard = this.ownerDocument.createElement('my-card') as MyCard;
			profileCard.setAttribute(Attribute.image, user.image);
			profileCard.setAttribute(Attribute.name, user.name);
			profileCard.setAttribute(Attribute.uid, String(user.id));
			profileCard.setAttribute(Attribute.age, String(user.age));
			profileCard.setAttribute(Attribute.gender, user.gender);
			profileCard.setAttribute(Attribute.area, user.jobDetails.area);
			profileCard.setAttribute(Attribute.position, user.jobDetails.position);
			profileCard.setAttribute(Attribute.timeInCompany, String(user.jobDetails.timeInCompany));
			profileCard.setAttribute(Attribute.experience, String(user.jobDetails.experience));
			this.cards.push(profileCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.cards.forEach((profile) => {
				this.shadowRoot?.appendChild(profile);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
