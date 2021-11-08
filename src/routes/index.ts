import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

router.get("/", (req, res) => {
  PageController.home;
});
router.get("/dogs", (req, res) => {
  PageController.dogs;
});
router.get("/cats", (req, res) => {
  PageController.cats;
});
router.get("/fishes", (req, res) => {
  PageController.fishes;
});
router.get("/search", SearchController.search);
export default router;
