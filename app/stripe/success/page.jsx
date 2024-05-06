import Link from "next/link";

const SuccessPage = () => {
  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h3 className="text-center mb-4">
          Awesome, your payment was successful!
        </h3>
        <Link href="/">
          <button className="btn btn-primary mx-auto">
            Back to the Homepage
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
