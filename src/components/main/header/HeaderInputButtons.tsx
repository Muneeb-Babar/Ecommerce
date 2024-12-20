"use client";

import { PiHeart as HeartIcon } from "react-icons/pi";
import { LuUser as UserIcon } from "react-icons/lu";
import { GrCart as CartIcon } from "react-icons/gr";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { useRecoilValue } from "recoil";
import {
  cartProductsState,
  credentialsState,
  favoriteProductsState,
} from "@/shared/recoil_states/atoms";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ILangPropsToComponent } from "@/shared/types";

export default function HeaderInputButtons({
  dict,
  lang,
}: { dict: any } & ILangPropsToComponent) {
  const amountOfFavorites = useRecoilValue(favoriteProductsState);
  const [amount, setAmount] = useState(0);
  const amountOfCart = useRecoilValue(cartProductsState);
  const [amountCart, setAmountCart] = useState(0);
  const credentials = useRecoilValue(credentialsState);
  const [isLoged, setIsLoged] = useState(false);

  useEffect(() => {
    setAmount(amountOfFavorites.length);
  }, [amountOfFavorites]);

  useEffect(() => {
    setAmountCart(
      amountOfCart.reduce((prev, current) => prev + current.amount, 0)
    );
  }, [amountOfCart]);

  useEffect(() => {
    setIsLoged(credentials.firstName.length === 0 ? false : true);
  }, [credentials]);

  return (
    <>
      <div
        className="flex items-center bg-color-secondary px-6 py-3 gap-4
      max-3xl:px-5 max-3xl:py-2"
      >
        <input
          type="text"
          placeholder={dict.header.searchPlaceholder}
          className="text-sm placeholder:text-color-text-2 bg-transparent outline-none
          max-2xl:text-xs"
        />
        <SearchIcon className="w-7 h-7 cursor-pointer max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5" />
      </div>
      <Link href={`/${lang}/wishlist`} className="relative cursor-pointer">
        {amount > 0 && <AmountOfItems text={amount.toString()} />}
        <HeartIcon className="w-8 h-8 max-3xl:w-7 max-3xl:h-7 max-2xl:w-6 max-2xl:h-6" />
      </Link>
      <Link href={`/${lang}/cart`} className="relative cursor-pointer">
        {amountCart > 0 && (
          <AmountOfItems
            text={amountCart > 99 ? `${amountCart}+` : amountCart.toString()}
          />
        )}
        <CartIcon className="w-7 h-7 max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5" />
      </Link>
      <Link href={isLoged ? `/${lang}/account` : `/${lang}/sign-up`}>
        <UserIcon className="w-7 h-7 max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5" />
      </Link>
    </>
  );
}

function AmountOfItems({ text }: { text: string }) {
  return (
    <p
      className="text-sm text-color-text-1 bg-color-secondary-2 rounded-full absolute -top-3 -right-3 w-6 h-6
    flex items-center justify-center
    max-3xl:w-5 max-3xl:h-5 max-3xl:-top-2 max-3xl:-right-2
    max-2xl:text-[10px] max-2xl:h-4 max-2xl:w-4 max-2xl:-right-[6px]"
    >
      {text}
    </p>
  );
}
