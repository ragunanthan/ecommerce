import React from "react";

const sizeClasses = {
  txtRubikRomanRegular20: "font-normal font-rubik",
  txtRalewaySemiBold20: "font-raleway font-semibold",
  txtJosefinSansRomanBold24: "font-bold font-josefinsans",
  txtRalewayBold40: "font-bold font-raleway",
  txtRubikSemiBold18: "font-rubik font-semibold",
  txtRubikRegular14WhiteA700: "font-normal font-rubik",
  txtRubikRegular18WhiteA700: "font-normal font-rubik",
  txtRalewayBold24: "font-bold font-raleway",
  txtRalewaySemiBold40: "font-raleway font-semibold",
  txtRubikRegular24: "font-normal font-rubik",
  txtRubikRegular14Black900: "font-normal font-rubik",
  txtRubikRegular20: "font-normal font-rubik",
  txtRalewayBold36Black900: "font-bold font-raleway",
  txtRalewayRomanBold40: "font-bold font-raleway",
  txtRubikRegular14Gray50a3: "font-normal font-rubik",
  txtRalewayRomanBold20: "font-bold font-raleway",
  txtRubikSemiBold18Yellow100: "font-rubik font-semibold",
  txtJosefinSansRomanBold24Gray500: "font-bold font-josefinsans",
  txtPollerOneRegular40: "font-normal font-pollerone",
  txtPlusJakartaSansRomanSemiBold14: "font-plusjakartasans font-semibold",
  txtRubikRegular18Gray53: "font-normal font-rubik",
  txtRalewayRomanRegular20: "font-normal font-raleway",
  txtPoppinsBold20: "font-bold font-poppins",
  txtRalewayRomanSemiBold20: "font-raleway font-semibold",
  txtRalewayRomanBold20WhiteA700: "font-bold font-raleway",
  txtRubikBold36: "font-bold font-rubik",
  txtRalewayRomanSemiBold20Gray53: "font-raleway font-semibold",
  txtRubikRegular16: "font-normal font-rubik",
  txtRubikRegular16Gray50a3: "font-normal font-rubik",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtRalewayRomanBold40Gray53: "font-bold font-raleway",
  txtRubikRegular18: "font-normal font-rubik",
  txtRalewayBold36: "font-bold font-raleway",
  txtRubikRegular12: "font-normal font-rubik",
  txtRubikRegular14: "font-normal font-rubik",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtRubikRegular18Gray500: "font-normal font-rubik",
  txtPoppinsRegular16Gray500: "font-normal font-poppins",
  txtRalewayRomanBold32: "font-bold font-raleway",
  txtRubikRomanRegular18: "font-normal font-rubik",
  txtRubikRegular16Gray53: "font-normal font-rubik",
  txtRalewayRomanBold32Black900: "font-bold font-raleway",
  txtRalewayRomanBold32Gray53: "font-bold font-raleway",
  txtRubikRomanRegular16: "font-normal font-rubik",
  txtRubikRegular18Bluegray900: "font-normal font-rubik",
  txtRalewayRomanBold36: "font-bold font-raleway",
  txtRalewayRomanSemiBold18: "font-raleway font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
