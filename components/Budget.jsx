export default function Budget() {
  return (
    <section className="bg-gradient-to-r from-black to-gray-800 text-white py-16"
    style={{
      backgroundImage: 'url("/images/bg2.png")', // Ensure this is the correct path to your background
      backgroundAttachment: 'fixed', // Makes the background image stay fixed
    }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/images/tonmoy.png" // Replace with the correct image path
            alt="Pricing Package"
            className="rounded-lg scale-[1.1] sm:scale-[1.4]"
          />
        </div>

        {/* Right Text Section */}
        <div className="p-6 mt-4 sm:mt-0  sm:p-8 lg:p-10 rounded-3xl shadow-lg relative border-2 border-gray-400 w-full md:w-1/2 lg:w-[130%] transform lg:translate-x-[10%] lg:border-r-transparent">
          <h2 className="text-3xl font-bold mb-4">
            DONE-FOR-YOU <br /> FACEBOOK YOUTUBE CHANNELS
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            We know that every client has different needs and budgets, so we&apos;ve
            created three packages to help you choose the best fit. Each package
            is designed around the quality of the videos, ensuring you get the
            results you&apos;re looking for ✅.
          </p>
          <p className="text-lg leading-relaxed">
            With a team of highly skilled editors, we specialize in producing
            premium-quality videos that stand out. Whether you need a basic edit
            or a high-end production, we have a package that&apos;s perfect for your
            goals 🙌🎥.
          </p>
        </div>
      </div>
    </section>
  );
}
