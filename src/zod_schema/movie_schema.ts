import { z, TypeOf } from 'zod';

export const movieSchema = z.object({
    body: z.object({
      id: z.string({ required_error: 'ID is required !' }).min(4,'You Id must be more than 3 char'),
      name: z.string({ required_error: "Name is required !" }).min(4, "you name must be more than 3 "),
      genre : z.enum(["Drama", "Action", "Comedy"], {required_error:"can only have these values (Drama,Action,Comedy)", }),
      rating: z.number({ required_error: "tickets is required !" }).min(1).max(5,"you rating must be from 1-5"),
      duration: z.number({ required_error: "price is required !" }).min(60,"add more 60"),

    }),
});
export type MovieSchemaType = TypeOf<typeof movieSchema>['body'];