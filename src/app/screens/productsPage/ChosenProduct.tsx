import { Box, Container, Stack } from "@mui/material";

export default function ChosenProduct() {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}></Stack>

          <Stack className={"dishes-filter-section"}></Stack>

          <Stack className={"list-category-section"}></Stack>
        </Stack>
      </Container>
      <div className={"brands-logo"}>
        <Container className={"family-brands"}>
          <Box className={"category-title"}> Our Family Brands</Box>
          <Stack className={"brand-list"}>
            <Box className={"review-box"}>
              <img src={"/img/gurme.webp"} />
            </Box>
            <Box className={"review-box"}></Box>
          </Stack>
        </Container>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            {/* <iframe src="" frameborder="0"></iframe> */}
          </Stack>
        </Container>
      </div>
      <div className={"address"}></div>
    </div>
  );
}
