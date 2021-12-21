import Link from "next/link";

const StyledLink = ({ children, ...rest }) => {
  return (
    <span className="underline hover:text-orange-default">
      <Link {...rest}>{children}</Link>
    </span>
  );
};

export default StyledLink;
