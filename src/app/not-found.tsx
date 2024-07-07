import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-[100px] h-max flex flex-col tracking-widest">
      
      
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <p className="text-[4vw] uppercase font-semibold text-[#00ffd9] text-center flex justify-center"> Page not found</p>
      <div className="link-container">
        <Link  href="/" className="more-link">
          Go back to home page
        </Link>
      </div>
    </div>
  );
}
