"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieSchema = void 0;
const zod_1 = require("zod");
exports.movieSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'ID is required !' }).min(4, 'You Id must be more than 3 char'),
        name: zod_1.z.string({ required_error: "Name is required !" }).min(4, "you name must be more than 3 "),
        genre: zod_1.z.enum(["Drama", "Action", "Comedy"], { required_error: "can only have these values (Drama,Action,Comedy)", }),
        rating: zod_1.z.number({ required_error: "tickets is required !" }).min(1).max(5, "you rating must be from 1-5"),
        duration: zod_1.z.number({ required_error: "price is required !" }).min(60, "add more 60"),
    }),
});
