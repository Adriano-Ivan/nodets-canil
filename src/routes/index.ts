import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

router.get("/", (req, res) => {
  res.send("home");
  //PageController.home;
});
router.get("/dogs", (req, res) => {
  res.send("dogs");
  //PageController.dogs;
});
router.get("/cats", (req, res) => {
  res.send("catas");
  //PageController.cats;
});
router.get("/fishes", (req, res) => {
  res.send("fishes");
  //PageController.fishes;
});
router.get("/search", SearchController.search);
export default router;
