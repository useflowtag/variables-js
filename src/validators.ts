import z from "zod";

export const ErrorSchema = z.object({
	message: z.string(),
	errors: z.array(z.any()).optional(),
});

export const ValueSchema = z.object({
	id: z.string(),
	name: z.string(),
	type: z.enum(["toggle", "json"]),
	digest: z.string(),
	updatedAt: z.number(),
	value: z.union([z.looseObject({}), z.boolean()]).optional(),
});
