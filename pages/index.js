import Link from "next/link";
import Head from "next/head";
import { Box } from "@mui/material";
import CategoryFilters from "../component/home/category";
import RecipeReviewCard from "../component/card";

const HomePage = () => {
  return (
    <Box>
      <Head>
        <title>Home Page</title>
      </Head>

      <Box>
        <CategoryFilters />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          marginTop: "5%",
          gap: "20px",
        }}
      >
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </Box>
    </Box>
  );
};

export default HomePage;
