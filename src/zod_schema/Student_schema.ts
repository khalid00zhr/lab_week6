import { z, TypeOf } from 'zod';

export const studentSchema = z.object({
    body: z.object({
      id: z.string({ required_error: 'ID is required !' }).min(4,'You Id must be more than 3 char'),
      name: z.string({ required_error: "Name is required !" }).min(4, "you name must be more than 3 "),
      major  : z.enum(["IT", "CS", "IS","SWE"], {required_error:"can only have these values (IT,CS,IS,SWE)", }),
      level : z.number({ required_error: "tickets is required !" }).min(1).max(8,"you rating must be from 1-8"),
      gpa: z.number({ required_error: "price is required !" }).min(0).max(5),

    }),
});
export type StudentSchemaType = TypeOf<typeof studentSchema >['body'];