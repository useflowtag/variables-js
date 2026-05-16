import type z from "zod";
import { fetchSchema, fetchVariable } from "./functions";
import type { ValueSchema } from "./validators";

type VariableValue = z.infer<typeof ValueSchema>["value"];

export function createClient(token: string) {
	return {
		getVariable: async <T extends VariableValue>(id: string): Promise<T> => {
			return (await fetchVariable(token, id)).value as T;
		},
		getVariableMeta: async (
			id: string,
		): Promise<Omit<z.infer<typeof ValueSchema>, "value">> => {
			const { value, ...meta } = await fetchVariable(token, id);
			return meta;
		},
		getSchema: async (id: string): Promise<Record<string, unknown>> => {
			return await fetchSchema(token, id);
		},
	};
}

/**
 * Read the variable with the given id.
 *
 * This is equivalent to code:
 * `createClient(process.env.FLOWTAG_VARIABLES_TOKEN).getVariable(id)`
 */
export async function getVariable<T extends VariableValue>(
	id: string,
): Promise<T> {
	const token = process.env.FLOWTAG_VARIABLES_TOKEN;
	if (!token) {
		throw new Error("FLOWTAG_VARIABLES_TOKEN is not set");
	}
	return (await fetchVariable(token, id)).value as T;
}
