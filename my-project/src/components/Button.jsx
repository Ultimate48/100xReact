import PropTypes from "prop-types";

function Button({
    children,
    variant = "default", 
    text="Add your text", 
    size = "md",
    width = "auto", 
    marginY = "0", marginX = "0", 
    disabled = false, 
    ...rest
  }){
  
    const base = "py-2 px-4 rounded-full shadow-standard backdrop-blur-xl";
  
    const sizeStyles = {
      "sm": "text-sm",
      "md": "text-md",
      "lg": "text-lg",
    };
  
    const widthStyles = {
      "full": "w-full",
      "auto": "w-auto",
    };
  
    const marginYStyle = `my-${marginY}`;
  
    const marginXStyle = `mx-${marginX}`;
  
  
    const variantStyles = {
      "default": "bg-neutral-50 hover:bg-neutral-200",
      "outline": "bg-transparent border border-solid border-buttonstroke",
    };
  
    const isDisabled = disabled ? "bg-neutral-500 cursor-not-allowed" : "";
  
    const classes = `${base} ${sizeStyles[size]} ${widthStyles[width]}  ${marginXStyle} ${marginYStyle} ${variantStyles[variant]} ${isDisabled}`;
  
    return(
      <button className={classes} {...rest}>
        {children || text}
      </button>
    );
}

Button.propTypes = {
    children : PropTypes.node,
    variant : PropTypes.oneOf(["default", "outline"]).isRequired,
    text : PropTypes.string, 
    size : PropTypes.oneOf(["sm", "md", "lg"]), 
    width : PropTypes.oneOf(["full", "auto"]),
    marginY : PropTypes.number, 
    marginX : PropTypes.number, 
    disabled : PropTypes.bool,
}

export default Button;