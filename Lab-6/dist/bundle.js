(() => {
	'use strict';
	const e = [
		{
			id: 1,
			name: 'Maria Lopez',
			image:
				'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 32,
			gender: 'Female',
			jobDetails: { area: 'Sales', position: 'Sales Manager', timeInCompany: 6, experience: 8 },
		},
		{
			id: 2,
			name: 'Emily Johnson',
			image:
				'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 28,
			gender: 'Female',
			jobDetails: { area: 'Human Resources', position: 'HR Specialist', timeInCompany: 3, experience: 5 },
		},
		{
			id: 3,
			name: 'John Smith',
			image:
				'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 35,
			gender: 'Male',
			jobDetails: { area: 'Finance', position: 'Financial Analyst', timeInCompany: 4, experience: 7 },
		},
		{
			id: 4,
			name: 'Michael Brown',
			image:
				'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 40,
			gender: 'Male',
			jobDetails: { area: 'IT', position: 'Software Developer', timeInCompany: 8, experience: 12 },
		},
		{
			id: 5,
			name: 'Sophia Martinez',
			image:
				'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 27,
			gender: 'Female',
			jobDetails: { area: 'Marketing', position: 'Marketing Coordinator', timeInCompany: 2, experience: 4 },
		},
		{
			id: 6,
			name: 'Isabella Garcia',
			image:
				'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 31,
			gender: 'Female',
			jobDetails: {
				area: 'Customer Service',
				position: 'Customer Support Specialist',
				timeInCompany: 4,
				experience: 6,
			},
		},
		{
			id: 7,
			name: 'William Taylor',
			image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600',
			age: 33,
			gender: 'Male',
			jobDetails: { area: 'Operations', position: 'Operations Manager', timeInCompany: 5, experience: 9 },
		},
		{
			id: 8,
			name: 'Ethan Wilson',
			image:
				'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 29,
			gender: 'Male',
			jobDetails: { area: 'Research and Development', position: 'Research Scientist', timeInCompany: 3, experience: 5 },
		},
		{
			id: 9,
			name: 'Olivia Anderson',
			image:
				'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 36,
			gender: 'Female',
			jobDetails: { area: 'Quality Assurance', position: 'QA Analyst', timeInCompany: 7, experience: 10 },
		},
		{
			id: 10,
			name: 'Emma Brown',
			image:
				'https://images.pexels.com/photos/19130891/pexels-photo-19130891/free-photo-of-moda-mujer-modelo-camisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 30,
			gender: 'Female',
			jobDetails: { area: 'Finance', position: 'Financial Advisor', timeInCompany: 6, experience: 8 },
		},
		{
			id: 11,
			name: 'James Martinez',
			image:
				'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 25,
			gender: 'Male',
			jobDetails: { area: 'Sales', position: 'Sales Representative', timeInCompany: 2, experience: 3 },
		},
		{
			id: 12,
			name: 'Alexander Rodriguez',
			image:
				'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 38,
			gender: 'Male',
			jobDetails: { area: 'Operations', position: 'Operations Analyst', timeInCompany: 9, experience: 11 },
		},
		{
			id: 13,
			name: 'Ava Wilson',
			image:
				'https://images.pexels.com/photos/14541208/pexels-photo-14541208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 26,
			gender: 'Female',
			jobDetails: { area: 'Marketing', position: 'Marketing Manager', timeInCompany: 4, experience: 6 },
		},
		{
			id: 14,
			name: 'Mia Perez',
			image:
				'https://images.pexels.com/photos/5878568/pexels-photo-5878568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			age: 29,
			gender: 'Female',
			jobDetails: { area: 'Human Resources', position: 'HR Manager', timeInCompany: 5, experience: 7 },
		},
		{
			id: 15,
			name: 'Daniel Thompson',
			image: 'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg',
			age: 34,
			gender: 'Male',
			jobDetails: { area: 'IT', position: 'IT Manager', timeInCompany: 7, experience: 9 },
		},
	];
	var a;
	!(function (e) {
		(e.image = 'image'),
			(e.name = 'name'),
			(e.uid = 'uid'),
			(e.age = 'age'),
			(e.gender = 'gender'),
			(e.area = 'area'),
			(e.position = 'position'),
			(e.timeInCompany = 'timeInCompany'),
			(e.experience = 'experience');
	})(a || (a = {}));
	class t extends HTMLElement {
		constructor() {
			super(), this.attachShadow({ mode: 'open' });
		}
		static get observedAttributes() {
			return Object.keys({
				image: null,
				name: null,
				uid: null,
				age: null,
				gender: null,
				area: null,
				position: null,
				timeInCompany: null,
				experience: null,
			});
		}
		connectedCallback() {
			this.render();
		}
		attributeChangedCallback(e, t, i) {
			switch (e) {
				case a.uid:
					this.uid = i ? Number(i) : void 0;
					break;
				case a.age:
					this.age = i ? Number(i) : void 0;
					break;
				case a.timeInCompany:
					this.timeInCompany = i ? Number(i) : void 0;
					break;
				case a.experience:
					this.experience = i ? Number(i) : void 0;
					break;
				default:
					this[e] = i;
			}
			this.render();
		}
		render() {
			this.shadowRoot &&
				(this.shadowRoot.innerHTML = `\n      <section>\n      <img src="${this.image}"/>\n      <h1>${this.name}</h1>\n      <h2>${this.id}</h2>\n      <p>${this.age}</p>\n      <p>${this.gender}</p>\n      <p>${this.area}</p>\n      <p>${this.position}</p>\n      <p>${this.timeInCompany}</p>\n      <p>${this.experience}</p>\n      </section>\n      `);
		}
	}
	window.customElements.define('my-card', t);
	class i extends HTMLElement {
		constructor() {
			super(),
				(this.cards = []),
				this.attachShadow({ mode: 'open' }),
				e.forEach((e) => {
					const t = this.ownerDocument.createElement('my-card');
					t.setAttribute(a.image, e.image),
						t.setAttribute(a.name, e.name),
						t.setAttribute(a.uid, String(e.id)),
						t.setAttribute(a.age, String(e.age)),
						t.setAttribute(a.gender, e.gender),
						t.setAttribute(a.area, e.jobDetails.area),
						t.setAttribute(a.position, e.jobDetails.position),
						t.setAttribute(a.timeInCompany, String(e.jobDetails.timeInCompany)),
						t.setAttribute(a.experience, String(e.jobDetails.experience)),
						this.cards.push(t);
				});
		}
		connectedCallback() {
			this.render();
		}
		render() {
			this.shadowRoot &&
				this.cards.forEach((e) => {
					var a;
					null === (a = this.shadowRoot) || void 0 === a || a.appendChild(e);
				});
		}
	}
	customElements.define('app-container', i);
})();
