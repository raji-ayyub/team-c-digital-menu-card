
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({ variant = "primary", size = "sm", className, ...props }: ButtonProps) {
  const baseStyles = "rounded-[8px] cursor-pointer text-[14px] transition duration-300";
  const variantStyles = {
    primary: "bg-[#FD8240] text-white hover:bg-[#EC7230]",
    secondary: "bg-[transparent]  text-[#FD8240] hover:text-white hover:bg-[#EC7230]",
    outline: "border border-[#FD8240] text-[#FD8240] hover:bg-[#FD8240] hover:text-white",
  };
  const sizeStyles = {
    sm: "w-[155px] h-[56px]",
    md: "px-[44px] py-[44px]",
    lg: "px-6 py-3",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}


// usage example

{/* <Button variant="primary" size="lg">Get Started</Button>
<Button variant="outline">Learn More</Button> */}