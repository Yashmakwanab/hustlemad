"use client";
import ButtonPrimary from "../../commonComponents/ButtonPrimary";
import presetPhoto from "./../../../../public/Images/landingPage/preset.png";
import "./styles.css";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import { add } from "@/app/redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProductList,
  setAllProductList,
} from "@/app/redux/slice/globleSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";

const Card = ({
  preset_name,
  content,
  price,
  cut_price,
  image_url,
  product_list,
}) => {
  const getproducts = async () => {
    try {
      const response = await axios.get(
        "https://hustlemad-backend.herokuapp.com/productList"
      );
      dispatch(setAllProductList(response.data.products));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getproducts();
  }, []);
  const allProducts = useSelector(selectAllProductList);
  const router = useRouter();
  const cartitems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClick = (productList) => {
    const productsToAdd = allProducts.filter((product) =>
      productList.includes(product._id)
    );

    productsToAdd.forEach((product) => {
      const isProductInCart = cartitems.some(
        (cartProduct) => cartProduct._id === product._id
      );
      if (!isProductInCart) {
        dispatch(add(product));
      }
    });
    router.push("/catalogue");
  };
  return (
    <div className="presetCard">
      <div className="presetImageContainer">
        <ImageWrapper
          className="presetImage"
          src={image_url}
          alt="Preset Image"
        />
      </div>
      <hr className="solid" />
      <div>
        <h3 className="font-recoleta underline productTitle">{preset_name}</h3>
        <p className="text-[12px] md:text-[14px] lg:text-[16px]">{content}</p>
      </div>
      <hr className="solid" />
      <div>
        <ButtonPrimary
          handleClick={() => handleClick(product_list)}
          content={
            <p className="text-[12px] md:text-[14px] lg:text-[16px]">
              Get at ₹ <span className="line-through">{price} </span>
              {cut_price}/Pack
            </p>
          }
        />
      </div>
      <span className="max-w-[280px] md:max-w-[320px] xl:max-w-[400px]">
        **Excl. of taxes
      </span>
    </div>
  );
};

export default Card;
