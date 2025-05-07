const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        {/* product description */}
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>

      {/* product description */}
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Comfy Store curates premium, sustainably crafted furniture and home
        living accessories that turn any space into a warm retreat. You will
        find cloud soft sofas, ergonomic office chairs, solid oak dining sets,
        and hand loomed rugs, all designed for modern style and long lasting
        comfort.
      </p>
    </>
  );
};
export default About;
