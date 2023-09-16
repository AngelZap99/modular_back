export interface ICreateEmployeeDto {
	first_name: string;
	last_name1: string;
	last_name2: string;
	daily_salary: number;
	admision_date: Date;
}

export interface IUpdateEmployeeDto {
	first_name?: string;
	last_name1?: string;
	last_name2?: string;
	daily_salary?: number;
	admision_date?: Date;
	status?: boolean;
}

export interface IEmployee {
	employee_id: number;
	first_name: string;
	last_name1: string;
	last_name2: string;
	daily_salary: number;
	admision_date: Date;

	created_date: Date;
	created_user_id: number | null;
	updated_date: Date;
	updated_user_id: number | null;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function isEmployee(object: any): object is IEmployee {
	return (<IEmployee>object).employee_id !== undefined;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function areEmployees(object: any): object is IEmployee[] {
	return (<IEmployee[]>object).length
		? (<IEmployee[]>object)[0].employee_id !== undefined
		: object;
}
