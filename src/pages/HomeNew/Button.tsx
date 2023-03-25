import MenuIcon from "@mui/icons-material/ArrowForwardIos";

interface ButtonProps {
  children?: React.ReactNode;
  extraClasses?: string;
  arrow?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  rest?: Object;
}

const Button = ({
  children,
  extraClasses = "",
  arrow = true,
  ...rest
}: ButtonProps) => {
  return (
    <button className={"arrow-button " + extraClasses} {...rest}>
      {children}
      {/* {arrow && <MenuIcon />} */}
    </button>
  );
};

export default Button;
