import z from "zod";
import { API_BASE_URL } from "./constants";
import { ErrorSchema, ValueSchema } from "./validators";

function buildApiUrl(pathname: string, token: string): URL {
	const base = API_BASE_URL.endsWith("/") ? API_BASE_URL : `${API_BASE_URL}/`;
	const url = new URL(pathname, base);
	url.searchParams.set("token", token);
	return url;
}

async function handleError(response: Response): Promise<never> {
	const { message } = ErrorSchema.parse(await response.json());
	throw new Error(message);
}

export async function fetchVariable(
	token: string,
	id: string,
): Promise<z.infer<typeof ValueSchema>> {
	const response = await fetch(buildApiUrl(`v1/value/${id}`, token));
	if (!response.ok) await handleError(response);
	return ValueSchema.parse(await response.json());
}

export async function fetchSchema(
	token: string,
	id: string,
): Promise<Record<string, unknown>> {
	const response = await fetch(buildApiUrl(`v1/schema/${id}`, token));
	if (!response.ok) await handleError(response);
	return z.looseObject({}).parse(await response.json());
}
