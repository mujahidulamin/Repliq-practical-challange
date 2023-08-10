const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">WELCOME TO THE </h1>
          <h1 className="mb-5 text-5xl font-bold">E-Shopping</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
