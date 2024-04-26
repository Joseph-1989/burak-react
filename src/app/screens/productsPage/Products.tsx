import React, { useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchAppBar from "../../components/searchbar";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { error } from "console";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR */

const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

/** COMPONENT */

export default function Products() {
  /** REDUX SLICE & SELECTOR */
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);

  /** COMPONENT */

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"products"}>
      <div className="main-container">
        <Stack className={"stack-dishes"}>
          <Stack className={"avatar-big-box"}>
            <Box className={"burak-restaurant-title"}> Burak Restaurant </Box>
            <Box className={"search-bar"}>
              <SearchAppBar />
            </Box>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price{" "}
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            {/* product-category */}

            <Stack className={"product-category"}>
              <div className={"category-main"}>
                <Button variant={"contained"} color={"secondary"}>
                  Other
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Dessert
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Drink
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Salad
                </Button>
                <Button variant={"contained"} color={"primary"}>
                  Dish
                </Button>
              </div>
            </Stack>

            {/* Product list */}

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + " litre"
                      : product.productSize + " size";
                  return (
                    <Stack key={product._id} className={"product-card"}>
                      <Box
                        className={"product-img"}
                        sx={{ backgroundImage: `url (${imagePath})` }}
                      >
                        <img className={"img"} src={imagePath} alt="" />
                        <div>
                          <div className={"product-sale"}>{sizeVolume}</div>

                          <Button className={"shop-btn"}>
                            <img
                              src={"/icons/shopping-cart.svg"}
                              // style={{ display: "flex" }}
                            />
                          </Button>

                          <Button className={"view-btn"} sx={{ right: "36px" }}>
                            <Badge
                              badgeContent={product.productViews}
                              color="secondary"
                            >
                              <RemoveRedEyeIcon
                                sx={{
                                  color:
                                    product.productViews === 0
                                      ? "gray"
                                      : "white",
                                }}
                              />
                            </Badge>
                          </Button>
                        </div>
                      </Box>

                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc-icon"}>
                          <MonetizationOnIcon className="product-price-icon" />
                          {product.productPrice}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available!</Box>
              )}
            </Stack>

            {/* end of  products-wrapper */}
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>

        {/* BRANDS LOGO */}

        <Stack className="brands-logo-stack">
          <div className={"brands-logo"}>
            <Container className={"family-brands"}>
              <Box className={"category-title"}> Our Family Brands</Box>
              <Stack className={"brand-list"}>
                <Box className={"review-box"}>
                  <img src={"/img/gurme.webp"} />
                </Box>
                <Box className={"review-box"}>
                  <img src={"/img/seafood.webp"} />
                </Box>
                <Box className={"review-box"}>
                  <img src={"/img/sweets.webp"} />
                </Box>
                <Box className={"review-box"}>
                  <img src={"/img/doner.webp"} />
                </Box>
              </Stack>
            </Container>
          </div>
        </Stack>

        {/* address section */}

        <div className={"address-div"}>
          <div className={"address-area"}>
            <Box className={"title"}>Our address</Box>{" "}
            <iframe
              style={{ marginTop: "60px" }}
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.381251478808!2d69.22388389706612!3d41.32232234466609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sen!2skr!4v1711985266429!5m2!1sen!2skr"
              }
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
