declare module "*.module.scss" {
  interface IsClassNames {
    [className: string]: string;
  }
  const classNames: IsClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

// в svg можно передавать свойства, благодяря такому типу. Пример использования:
// import { CSSProperties, FC } from "react";
// import Logo from "./logo.svg";

// const logoStyle: CSSProperties = {
//     fill: "#CF4532",
//     width: "100px"
// };

// const MyLogo: FC = () => ( <Logo  style={ logoStyle }/> );

declare const __IS_DEV__: boolean;
