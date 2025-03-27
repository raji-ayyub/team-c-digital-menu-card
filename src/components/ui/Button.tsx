
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "auto";
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ 
  variant = "primary", 
  size = "sm", className, 
  type = "button",
  onClick,
  disabled = false,
  
  
  ...props }: ButtonProps) {
  const baseStyles = "rounded-[10px] border-[1px] text-[14px] transition focus:ring-4 focus:ring-[#F0AB59] duration-300 " ;
  const variantStyles = {
    primary: `bg-[#FD8240] text-white hover:bg-[#F55D3E] border-[transparent] cursor-pointer ${disabled ? "bg-[gray] text-[gray] opacity-50 hover:bg-[gray] cursor-not-allowed": ""}`,
    secondary: `bg-[transparent]  border-[#FD8240] text-[#FD8240] hover:text-[#F55D3E] hover:border-[#F55D3E]  cursor-pointer ${disabled ? "border-[gray] hover:border-[gray] text-[gray] cursor-not-allowed opacity-50 hover:text-[gray] ": ""}`,
    
  };
  const sizeStyles = {
    sm: "w-full md:w-[109px] h-[40px]",
    md: "px-[44px] py-[44px]",
    auto: "w-full h-[56px]",
  };
 

  return (
    <button
      type={type}
      disabled = {disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}


// usage example

{/* <Button variant="primary" size="lg">Get Started</Button>
<Button variant="outline">Learn More</Button> */}