function Welcome() {
  return (
    <div className="bg-primary text-white text-center py-16">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-4">
          Welcome To Hike
        </h1>
        <div className="flex items-center w-64 my-4">
          <div className="flex-grow h-0.5 bg-white"></div>
          <div className="mx-4">
            <i className="fas fa-star text-2xl"></i>
          </div>
          <div className="flex-grow h-0.5 bg-white"></div>
        </div>
        <p className="text-xl font-light mb-0">
          a delightful way to explore nature with friends and family
        </p>
      </div>
    </div>
  );
}

export default Welcome;
