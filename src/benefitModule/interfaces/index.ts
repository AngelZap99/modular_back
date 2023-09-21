import { BenefitsType } from '@prisma/client';

export interface ICreateBenefitDto {
	type: BenefitsType;
	quantity: number;
	employee_id: number;
}

export interface IUpdateBenefitDto {
	type: BenefitsType;
	quantity: number;
}

export interface IBenefit {
	benefits_id: number;
	type: BenefitsType;
	quantity: number;
	employee_id: number;

	created_date: Date;
	created_user_id: number | null;
	updated_date: Date;
	updated_user_id: number | null;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function isBenefit(object: any): object is IBenefit {
	return (<IBenefit>object).benefits_id !== undefined;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function areBenefits(object: any): object is IBenefit[] {
	return (<IBenefit[]>object).length
		? (<IBenefit[]>object)[0].benefits_id !== undefined
		: object;
}
