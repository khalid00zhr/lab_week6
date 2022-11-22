"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleware/validate"));
const movie_schema_1 = require("../zod_schema/movie_schema");
const router = express_1.default.Router();
let movie = [];
movie.push({
    id: "100000",
    name: "movie1",
    genre: "Action",
    rating: 4,
    duration: 75
});
router.get('/', (req, res, next) => {
    return res.json(movie);
});
router.post('/', (0, validate_1.default)(movie_schema_1.movieSchema), (req, res, next) => {
    const newpark = req.body;
    movie.push(newpark);
    return res.status(201).json({ message: 'movie Added !' });
});
router.put('/:id', (0, validate_1.default)(movie_schema_1.movieSchema), (req, res) => {
    const updated = req.body;
    const { id } = req.params;
    const updatedList = movie.filter((movi) => {
        return movi.id !== id;
    });
    updatedList.push(updated);
    movie = updatedList;
    return res.json({
        message: 'movie updated !',
    });
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const newList = movie.filter((movi) => {
        return movi.id !== id;
    });
    movie = newList;
    return res.json({
        message: 'movie deleted !',
    });
});
router.get('/:name', (req, res) => {
    let str = req.params.name;
    let name = str.replace("-", " ");
    let searchArr = movie.filter((item) => {
        return item.name.toLowerCase() === name;
    });
    return res.json(searchArr);
});
exports.default = router;
