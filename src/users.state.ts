import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface User {
	id: number;
	name: string;
}

@State<User>({
	name: 'userdata',
	defaults: {
		id: 13,
		name: 'John Doe'
	}
})
export class UserState {

}
